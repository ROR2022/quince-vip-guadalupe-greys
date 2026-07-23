"use client";

import { Sparkles } from "@/components/sparkles";
import BackgroundCarrousel from "@/components/sections/BackgroundCarrousel";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { quinceMainData } from "../sections/data/main-data";

const { splash } = quinceMainData;

const splashImages = splash.images;
interface SplashSceneProps {
  onStart: () => void;
}

function SplashSceneContent({ onStart }: SplashSceneProps) {
  const [dataInvitation, setDataInvitation] = useState<any>(null);
  const searchParams = useSearchParams();
  const guestParam = searchParams.get("guest") || "";

  useEffect(() => {
    if (guestParam && guestParam.trim() !== "") {
      //console.log(`Guest parameter detected: ${guestParam}`)
      // Fetch data based on guest parameter
      fetchDataForGuest(guestParam);
    }
  }, [guestParam]);

  const fetchDataForGuest = async (guest: string) => {
    try {
      const response = await fetch(`/api/guests/${guest}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //console.log('Fetched guest data:', data);
      const guestName = data.data.name;
      const personalInvitation = data.data.personalInvitation;
      const numberOfGuests = personalInvitation.numberOfGuests;
      const specialMessage = personalInvitation.message;
      console.log(`Guest Name: ${guestName}`);
      //console.log(`Personal Invitation:`, personalInvitation);
      console.log(`Number of Guests Allowed: ${numberOfGuests}`);
      console.log(`Special Message: ${specialMessage}`);
      if (guestName) {
        setDataInvitation({
          guestName,
          numberOfGuests,
          specialMessage,
        });
      }
      // You can use this data to customize the experience further
    } catch (error) {
      console.error("Error fetching guest data:", error);
    }
  };

  return (
    <div
      onClick={onStart}
      className="relative w-full h-screen cursor-pointer overflow-hidden"
    >
      {/* Photo Carousel Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundCarrousel images={splashImages} />
      </div>

      
      <Sparkles count={30} />

      <div className="flex flex-col items-center justify-end text-center h-full z-30 space-y-8 px-4 animate-pulse">
        {/* Enhanced message with better visibility */}
        <div className="relative">
          {/* Background blur effect for the message 
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-full -m-4"></div>
          */}
          {/* Main Title */}
          <div className="my-4">
            <h2>
              <span className="relative text-2xl md:text-3xl lg:text-4xl text-white font-semibold drop-shadow-lg">
                ¡Mis XV años!
              </span>
            </h2>
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl text-white font-extrabold drop-shadow-lg">
              Guadalupe Greys
            </h1>
          </div>

          <div>
            {dataInvitation && (
              <div>
                <p className="relative text-2xl md:text-3xl text-white font-medium drop-shadow-lg">
                  Bienvenid@, {dataInvitation.guestName}!
                </p>
                {dataInvitation.specialMessage && (
                  <p className="relative mt-2 text-lg md:text-xl text-white font-light italic drop-shadow-lg">
                    "{dataInvitation.specialMessage}"
                  </p>
                )}
                {dataInvitation.numberOfGuests && (
                  <div className="relative mt-2">
                    <p className="relative text-lg md:text-xl text-white font-bold drop-shadow-lg">
                      Pase para: {dataInvitation.numberOfGuests} invitado
                      {dataInvitation.numberOfGuests > 1 ? "s" : ""}.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="relative text-2xl md:text-3xl text-white font-medium drop-shadow-lg">
            ✨ Toca para comenzar ✨
          </p>
        </div>
      </div>
    </div>
  );
}

function SplashSceneWrapper(props: SplashSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5d5d8] via-[#e8c4c8] to-[#d4a5a8]">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent mx-auto"></div>
            <p className="text-white text-lg font-semibold">
              Cargando experiencia...
            </p>
          </div>
        </div>
      }
    >
      <SplashSceneContent {...props} />
    </Suspense>
  );
}

export { SplashSceneWrapper as SplashScene };
