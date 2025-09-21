"use client"

import React from "react"

// Accept standard anchor attributes + optional analytics props
export type CtaLinkProps = React.PropsWithChildren<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    gaEvent?: string
    fbEvent?: string
    eventParams?: Record<string, any>
  }
>

export default function CtaLink({ href, className, children, gaEvent, fbEvent, eventParams, onClick, ...rest }: CtaLinkProps) {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window !== "undefined") {
        // @ts-expect-error: gtag is not typed on window in this project
        void window.gtag?.("event", gaEvent ?? "lead", { form: "v2_lead_cta", method: "cta_button", ...(eventParams ?? {}) })
        // @ts-expect-error: fbq is not typed on window in this project
        void window.fbq?.("trackCustom", fbEvent ?? "LeadIntent", eventParams ?? {})
      }
      onClick?.(e)
    },
    [gaEvent, fbEvent, eventParams, onClick]
  )

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}