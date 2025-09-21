"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"

const baseSlides = [
  { src: "/produtos/camiseta.png", label: "Camiseta", alt: "Mockup de camiseta" },
  { src: "/produtos/moletom.png", label: "Moletom", alt: "Mockup de moletom" },
  { src: "/produtos/regata.png", label: "Regata", alt: "Mockup de regata" },
  { src: "/produtos/bodyinfantil.png", label: "Body infantil", alt: "Mockup de body infantil" },
  { src: "/produtos/cropet.png", label: "Cropped", alt: "Mockup de cropped" },
]

export default function HeroCarousel() {
  const slides = baseSlides
  const extendedSlides = useMemo(() => {
    // Clones para loop infinito: [last, ...slides, first]
    return [slides[slides.length - 1], ...slides, slides[0]]
  }, [slides])

  const [animIndex, setAnimIndex] = useState(1) // começa no primeiro slide real
  const [enableTransition, setEnableTransition] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const realIndex = (animIndex - 1 + slides.length) % slides.length

  // Autoplay mais fluido: 3s
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      next()
    }, 3000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const goto = (i: number) => {
    setEnableTransition(true)
    setAnimIndex(i + 1)
  }
  const prev = () => {
    setEnableTransition(true)
    setAnimIndex((i) => i - 1)
  }
  const next = () => {
    setEnableTransition(true)
    setAnimIndex((i) => i + 1)
  }

  const onTransitionEnd = () => {
    // Se estiver nos clones, saltar sem transição
    if (animIndex === 0) {
      setEnableTransition(false)
      setAnimIndex(slides.length)
    } else if (animIndex === slides.length + 1) {
      setEnableTransition(false)
      setAnimIndex(1)
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    setIsPaused(true)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current != null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current
    }
  }
  const onTouchEnd = () => {
    const threshold = 50
    if (Math.abs(touchDeltaX.current) > threshold) {
      if (touchDeltaX.current < 0) {
        next()
      } else {
        prev()
      }
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setIsPaused(false)
  }

  return (
    <div className="rounded-3xl border bg-white shadow-sm p-6" role="region" aria-roledescription="carousel" aria-label="Carrossel de produtos">
      <div
        className="relative overflow-hidden rounded-xl h-[260px] md:h-[340px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`flex h-full ${enableTransition ? "transition-transform duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)]" : ""}`}
          style={{ transform: `translateX(-${animIndex * 100}%)` }}
          onTransitionEnd={onTransitionEnd}
        >
          {extendedSlides.map((s, i) => {
            // Detectar se este slide corresponde ao primeiro real para priority
            const isFirstReal = i === 1
            return (
              <div key={i} className="relative min-w-full h-full flex items-center justify-center bg-neutral-50">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-contain rounded-xl shadow-sm"
                  priority={isFirstReal}
                  loading={isFirstReal ? "eager" : "lazy"}
                  sizes="(min-width: 768px) 560px, 100vw"
                />
              </div>
            )
          })}
        </div>

        {/* Setas */}
        <button
          type="button"
          onClick={prev}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-neutral-800 shadow ring-1 ring-neutral-200 transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-neutral-800 shadow ring-1 ring-neutral-200 transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          ›
        </button>

        {/* Bullets */}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              aria-current={i === realIndex}
              title={`Slide ${i + 1}`}
              onClick={() => goto(i)}
              className={`h-2.5 rounded-full transition ${i === realIndex ? "w-4 bg-[var(--color-primary)]" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"}`}
            />
          ))}
        </div>
      </div>

      {/* Legenda */}
      <div className="mt-4 text-center text-sm md:text-base font-medium text-neutral-800">{slides[realIndex].label}</div>
    </div>
  )
}