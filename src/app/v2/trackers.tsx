"use client"

import { useEffect } from "react"

type Props = { page: string }

export default function Trackers({ page }: Props) {
  useEffect(() => {
    // GA4 page_view + custom view_content
    if (typeof window !== "undefined") {
      // @ts-expect-error: gtag is not typed on window in this project
      void window.gtag?.("event", "page_view", { page_location: page })
      // @ts-expect-error: gtag is not typed on window in this project
      void window.gtag?.("event", "view_content", { page_location: page })
      // Meta Pixel PageView is already fired on layout init
    }
  }, [page])

  return null
}