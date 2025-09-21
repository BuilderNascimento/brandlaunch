"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX, Plus, Minus } from "lucide-react"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady?: () => void
    _ytApiPromise?: Promise<void>
  }
}

function loadYouTubeIframeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.YT && window.YT.Player) return Promise.resolve()
  if (window._ytApiPromise) return window._ytApiPromise

  window._ytApiPromise = new Promise<void>((resolve) => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.head.appendChild(tag)

    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve()
    }
  })

  return window._ytApiPromise
}

export default function HeroVideo({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<any>(null)
  const [ready, setReady] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(60)

  useEffect(() => {
    let player: any
    let mounted = true

    loadYouTubeIframeAPI().then(() => {
      if (!mounted || !containerRef.current) return
      const id = `hero-youtube-${Math.random().toString(36).slice(2)}`
      const mountEl = document.createElement("div")
      mountEl.id = id
      mountEl.style.position = "absolute"
      mountEl.style.inset = "0"
      containerRef.current.appendChild(mountEl)

      player = new window.YT.Player(id, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          // Important to allow JS API control
          enablejsapi: 1,
        },
        events: {
          onReady: (e: any) => {
            playerRef.current = e.target
            try {
              e.target.mute()
              e.target.setVolume(volume)
              e.target.playVideo()
            } catch {}
            setReady(true)
          },
        },
      })
    })

    return () => {
      mounted = false
      try {
        if (player && player.destroy) player.destroy()
      } catch {}
    }
  }, [videoId])

  const toggleMute = () => {
    const p = playerRef.current
    if (!p) return
    try {
      if (isMuted) {
        p.unMute()
        p.setVolume(volume)
        setIsMuted(false)
      } else {
        p.mute()
        setIsMuted(true)
      }
    } catch {}
  }

  const changeVolume = (delta: number) => {
    const p = playerRef.current
    if (!p) return
    try {
      const next = Math.max(0, Math.min(100, volume + delta))
      setVolume(next)
      if (!isMuted) p.setVolume(next)
      if (next === 0) {
        p.mute()
        setIsMuted(true)
      } else if (isMuted) {
        p.unMute()
        setIsMuted(false)
      }
    } catch {}
  }

  return (
    <div className="relative overflow-hidden rounded-xl h-[260px] md:h-[340px]">
      {/* YouTube Player Mount */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full rounded-xl" />

      {/* Visible volume controls */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 md:p-4">
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="inline-flex items-center gap-2 rounded-full bg-black/70 text-white px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-semibold shadow hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label={isMuted ? "Ativar som" : "Silenciar"}
            title={isMuted ? "Ativar som" : "Silenciar"}
          >
            {isMuted ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            <span className="hidden sm:inline">{isMuted ? "Ativar som" : "Silenciar"}</span>
          </button>
          <div className="hidden sm:flex items-center gap-1">
            <button
              type="button"
              onClick={() => changeVolume(-10)}
              className="inline-flex items-center rounded-full bg-white/90 text-neutral-900 px-2 py-2 text-xs font-semibold shadow hover:bg-white"
              aria-label="Diminuir volume"
              title="Diminuir volume"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => changeVolume(+10)}
              className="inline-flex items-center rounded-full bg-white/90 text-neutral-900 px-2 py-2 text-xs font-semibold shadow hover:bg-white"
              aria-label="Aumentar volume"
              title="Aumentar volume"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fallback CTA while player não está pronto */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="animate-pulse rounded-full bg-black/10 px-4 py-2 text-xs text-neutral-700">Carregando vídeo…</div>
        </div>
      )}
    </div>
  )
}