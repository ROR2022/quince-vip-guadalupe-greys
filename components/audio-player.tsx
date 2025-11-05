"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  src?: string
  autoPlay?: boolean
  onPlay?: () => void
}

export function AudioPlayer({ src, autoPlay = false, onPlay }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (autoPlay && audioRef.current && src && !hasError) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          onPlay?.()
        })
        .catch((error) => {
          console.log("[v0] Audio autoplay failed:", error.message)
          setHasError(true)
        })
    }
  }, [autoPlay, onPlay, src, hasError])

  const toggleMute = () => {
    if (audioRef.current && !hasError) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleError = () => {
    console.log("[v0] Audio failed to load - no audio file provided yet")
    setHasError(true)
  }

  if (!src || hasError) {
    return null
  }

  return (
    <div className="fixed top-6 left-6 z-50">
      <audio ref={audioRef} src={src} loop onError={handleError} />
      <Button
        onClick={toggleMute}
        size="icon"
        variant="secondary"
        className="rounded-full w-12 h-12 bg-primary/80 hover:bg-primary backdrop-blur-sm shadow-lg"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Volume2 className="h-5 w-5 text-primary-foreground" />
        )}
      </Button>
    </div>
  )
}
