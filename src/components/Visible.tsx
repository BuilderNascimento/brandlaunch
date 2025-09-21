"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  children: React.ReactNode
  rootMargin?: string
  threshold?: number | number[]
  className?: string
}

export default function Visible({ children, rootMargin = "0px 0px -10% 0px", threshold = 0.15, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!ref.current || shown) return
    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
          }
        })
      },
      { root: null, rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, shown])

  return <div ref={ref} className={className}>{shown ? children : null}</div>
}