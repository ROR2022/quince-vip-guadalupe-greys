"use client";

import { Sparkles } from "@/components/sparkles";
import BackgroundCarrousel from "@/components/sections/BackgroundCarrousel";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { quinceMainData } from "../sections/data/main-data";
import { invitedGuests } from "../sections/data/invited-guests";

const { splash } = quinceMainData;

const splashImages = splash.images;
interface SplashSceneProps {
  onStart: () => void;
}

function SplashSceneContent({ onStart }: SplashSceneProps) {
  const searchParams = useSearchParams();
  const guestId = searchParams.get("id") || "";
  const dataInvitation = guestId ? invitedGuests[guestId] : undefined;
  const numberOfGuests = dataInvitation ? dataInvitation.numberOfGuests : 0;

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
                  Bienvenid@, {dataInvitation.name}!
                </p>
                {numberOfGuests > 0 && (
                  <div className="relative mt-2">
                    <p className="relative text-lg md:text-xl text-white font-bold drop-shadow-lg">
                      Pase para: {numberOfGuests} invitado
                      {numberOfGuests > 1 ? "s" : ""}.
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
