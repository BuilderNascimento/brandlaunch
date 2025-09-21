"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const handleRegex = /^@([A-Za-z0-9_.]{2,30})$/

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Mínimo de 2 caracteres")
    .max(80, "Máximo de 80 caracteres"),
  email: z.string().email("Informe um e-mail válido"),
  handle: z
    .string()
    .regex(handleRegex, "Use @ e 2–30 caracteres: letras, números, _ ou ."),
  niche: z.enum([
    "fitness",
    "beauty",
    "lifestyle",
    "geek",
    "música",
    "games",
    "outros",
  ]),
  country: z.enum(["FR", "BR", "EU", "Outro"]),
  consent: z.literal(true, {
    message: "Necessário aceitar a Política de Privacidade",
  }),
})

export type LeadFormValues = z.infer<typeof schema>

export default function LeadForm() {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: LeadFormValues) => {
    try {
      // mark parameter as used to satisfy eslint no-unused-vars
      void _data
      setSubmitting(true)
      // Simula integração. Futuro: POST /api/subscribe -> Brevo/Mailchimp
      await new Promise((r) => setTimeout(r, 500))

      // Dispara métricas
      if (typeof window !== "undefined") {
        // GA4 custom
        // @ts-expect-error: gtag is not typed on window in this project
        void window.gtag?.("event", "lead", { form: "v2_lead", method: "form" })
        // Meta Pixel
        // @ts-expect-error: fbq is not typed on window in this project
        void window.fbq?.("track", "Lead")
      }

      toast.success("Obrigado! Em até 24h enviamos os próximos passos.")
      reset()
    } catch (e) {
      console.error(e)
      toast.error("Confira os campos obrigatórios e tente novamente.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Nome</label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="Seu nome"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">E-mail</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="voce@email.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="handle" className="mb-1 block text-sm font-medium">@Instagram/TikTok</label>
        <input
          id="handle"
          {...register("handle")}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="@seuuser"
          aria-invalid={!!errors.handle}
        />
        {errors.handle && <p className="mt-1 text-xs text-red-600">{errors.handle.message}</p>}
      </div>

      <div>
        <label htmlFor="niche" className="mb-1 block text-sm font-medium">Nicho</label>
        <select
          id="niche"
          {...register("niche")}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          aria-invalid={!!errors.niche}
          defaultValue=""
        >
          <option value="" disabled>Selecione</option>
          <option value="fitness">fitness</option>
          <option value="beauty">beauty</option>
          <option value="lifestyle">lifestyle</option>
          <option value="geek">geek</option>
          <option value="música">música</option>
          <option value="games">games</option>
          <option value="outros">outros</option>
        </select>
        {errors.niche && <p className="mt-1 text-xs text-red-600">{errors.niche.message}</p>}
      </div>

      <div>
        <label htmlFor="country" className="mb-1 block text-sm font-medium">País</label>
        <select
          id="country"
          {...register("country")}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          aria-invalid={!!errors.country}
          defaultValue=""
        >
          <option value="" disabled>Selecione</option>
          <option value="BR">BR</option>
          <option value="FR">FR</option>
          <option value="EU">EU</option>
          <option value="Outro">Outro</option>
        </select>
        {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country.message}</p>}
      </div>

      <div className="md:col-span-2 flex items-start gap-2">
        <input id="consent" type="checkbox" {...register("consent")} className="mt-1" />
        <label htmlFor="consent" className="text-sm text-neutral-700">
          Li e aceito a <a className="underline" href="/privacy" target="_blank" rel="noreferrer">Política de Privacidade</a> (LGPD).
        </label>
      </div>
      {errors.consent && <p className="md:col-span-2 -mt-2 text-xs text-red-600">{errors.consent.message}</p>}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-5 py-3 text-white shadow-sm transition hover:brightness-90 disabled:opacity-60"
        >
          {submitting ? "Enviando..." : "Entrar na lista de espera"}
        </button>
        <p className="mt-2 text-xs text-neutral-500">Sucesso: “Obrigado! Em até 24h enviamos os próximos passos.”</p>
      </div>
    </form>
  )
}