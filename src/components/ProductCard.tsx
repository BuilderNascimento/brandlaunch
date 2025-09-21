import Image from "next/image"
import { cn } from "@/lib/utils"

export type ProductCardProps = {
  title: string
  description: string
  imageSrc: string
  thumbSrc?: string
  logoSrc?: string
  className?: string
}

export default function ProductCard({ title, description, imageSrc, thumbSrc, logoSrc = "/products/logo-placeholder.svg", className }: ProductCardProps) {
  const alt = `Mockup de ${title} com logo aplicada`
  return (
    <article className={cn("group relative rounded-2xl border bg-white shadow-sm transition-transform hover:shadow-md hover:scale-[1.02]", className)}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl p-4">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 3" }}>
          <Image src={imageSrc} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
          {/* Logo preview */}
          {logoSrc ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image src={logoSrc} alt="Logo da marca sobre o mockup" width={160} height={160} className="opacity-75 mix-blend-multiply drop-shadow-sm" />
            </div>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="flex items-start gap-3 p-4 pt-0">
        <div className="relative h-[120px] w-[120px] overflow-hidden rounded-xl border bg-white shadow-sm">
          <Image src={thumbSrc ?? imageSrc} alt={`${title} – miniatura`} fill className="object-cover" sizes="120px" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-sm text-neutral-600">{description}</p>
        </div>
      </div>
    </article>
  )
}