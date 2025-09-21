import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Trackers from "./trackers"
import CtaLink from "./cta-link"
import LeadForm from "./lead-form"
import { CircleCheck, CircleX, Clock, DollarSign, Zap, Package, Rocket, Coins, Target, Users } from "lucide-react"
import Visible from "@/components/Visible"

export const metadata: Metadata = {
  title: "BrandLaunch – Lance sua marca em 20 dias, sem estoque",
  description:
    "Crie sua linha de camisetas, moletons, regatas, bodies infantis e cropped. Zero estoque, logística inclusa, resultados reais em até 20 dias.",
  openGraph: {
    title: "BrandLaunch – Lance sua marca em 20 dias, sem estoque",
    description:
      "Crie sua linha de camisetas, moletons, regatas, bodies infantis e cropped. Zero estoque, logística inclusa, resultados reais em até 20 dias.",
    images: ["/og-brandlaunch.svg"],
  },
}

export default function PageV2() {
  return (
     <main className="min-h-screen bg-white text-neutral-900 [--color-primary:#FF4C29] [--color-secondary:#6C63FF]">
      <Trackers page="/v2" />
      {/* Top bar with wordmark */}
      <header className="sticky top-0 z-20 border-b border-neutral-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" aria-label="BrandLaunch">
            <div className="relative h-7 w-[180px]"><Image src="/wordmark.svg" alt="BrandLaunch" fill className="object-contain" /></div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#beneficios" className="text-sm text-neutral-600 hover:text-neutral-900">Benefícios</a>
            <a href="#como-funciona" className="text-sm text-neutral-600 hover:text-neutral-900">Como funciona</a>
            <CtaLink
  href="#lead"
  aria-label="Quero lançar minha marca"
  gaEvent="lead_intent_header"
  fbEvent="LeadIntent"
  eventParams={{ location: "header", section: "topbar" }}
  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2 text-white hover:brightness-90"
>
  Quero lançar minha marca
</CtaLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm animate-float">
              <span className="inline-block size-2 rounded-full bg-[var(--color-primary)]" /> ⚡ Sem estoque • Logística inclusa • Até 20 dias
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Construa sua{' '}
              <span
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent uppercase fade-in"
                style={{ animationDelay: '60ms' }}
              >
                MARCA
              </span>
              . Lançamento garantido em até{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent fade-in" style={{animationDelay: '120ms'}}>
                20 dias
              </span>.
            </h1>
            <div className="mt-3 inline-flex w-fit items-center rounded-full bg-[#F4F4F5] px-3 py-1.5 text-xs md:text-sm font-semibold text-neutral-900">
              50 influenciadores já confiam na Brand Launch
            </div>
            <p className="mt-4 text-lg text-neutral-700">Transforme sua audiência em uma marca lucrativa.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#lead" aria-label="Quero lançar minha marca agora" className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-5 py-3 text-white shadow-sm transition hover:brightness-90">
                Quero lançar minha marca agora
              </Link>
              <a href="#como-funciona" className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]">
                Ver como funciona
              </a>
            </div>
            <div className="mt-4 text-sm text-neutral-600">
              20 dias • Logística inclusa • Comissão transparente
            </div>
          </div>

          {/* Carrossel do Hero */}
          <div className="rounded-3xl border bg-white shadow-sm p-6">
            <div className="relative overflow-hidden rounded-xl h-[260px] md:h-[340px]">
              <iframe
                className="absolute inset-0 h-full w-full rounded-xl"
                src="https://www.youtube.com/embed/f4kdjSOtASE?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=f4kdjSOtASE"
                title="Vídeo de apresentação"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Zero estoque", desc: "Produção sob demanda", Icon: Package },
            { title: "Lançamento rápido", desc: "Coleção no ar em até 20 dias", Icon: Rocket },
            { title: "Monetização fácil", desc: "Comissões automáticas por venda", Icon: Coins },
            { title: "Foco no conteúdo", desc: "Você cria, nós operamos", Icon: Target },
            { title: "Suporte estratégico", desc: "Acompanhamento em cada etapa", Icon: Users },
          ].map((b, i) => (
            <Card
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Benefício: ${b.title}`}
              className="group relative cursor-pointer border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:rotate-[0.2deg] hover:border-[var(--color-secondary)]/30 hover:from-white hover:to-[var(--color-secondary)]/5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2"
            >
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--color-secondary)] group-hover:text-white">
                  <b.Icon className="size-5" />
                </div>
                <CardTitle>{b.title}</CardTitle>
                <CardDescription>{b.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Como funciona</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Briefing rápido", desc: "5 min de formulário." },
              { title: "Criação da coleção", desc: "Designs e mockups aprovados." },
              { title: "Loja no ar", desc: "Logística, pagamento e tracking incluídos." },
            ].map((s, i) => (
              <Card key={i} className="transition hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de captação */}
      <LeadFormSection />

      {/* Produtos disponíveis */}
      <section id="produtos" className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Produtos disponíveis</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Camiseta", d: "Algodão premium • várias cores • todos os tamanhos.", img: "/produtos/camiseta.png", alt: "Mockup de camiseta" },
              { t: "Moletom", d: "Felpa macia • capuz opcional • unissex.", img: "/produtos/moletom.png", alt: "Mockup de moletom" },
              { t: "Regata", d: "Modelagem esportiva • verão.", img: "/produtos/regata.png", alt: "Mockup de regata" },
              { t: "Body infantil", d: "Macio, seguro e resistente.", img: "/produtos/bodyinfantil.png", alt: "Mockup de body infantil" },
              { t: "Cropped", d: "Street & lifestyle • tendência.", img: "/produtos/cropet.png", alt: "Mockup de cropped" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border bg-white p-4 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
                <Image
                  src={p.img}
                  alt={p.alt}
                  width={1200}
                  height={800}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <div className="font-semibold text-lg mt-2">{p.t}</div>
                <div className="text-sm text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Visible>
      <section id="depoimentos" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Depoimentos</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { q: "Em 60 dias bati R$ 25K/mês sem estoque parado.", a: "Marina Silva", h: "@marinafit", b: "+R$ 25K/mês", img: "/depoimentos/mariana.jpg", net: "instagram" },
              { q: "Linha geek lançada em 3 semanas. ROI 3,2x no 1º mês.", a: "Carlos Gamer", h: "@carlosgames", b: "ROI 3,2x", img: "/depoimentos/carlos.jpg", net: "tiktok" },
              { q: "Lifestyle que performa: ticket médio R$ 119 e recompras.", a: "Ana Beauty", h: "@anabeauty", b: "TM R$ 119", img: "/depoimentos/ana.jpg", net: "instagram" },
              { q: "0 reclamações logísticas no trimestre.", a: "Pedro Lifestyle", h: "@pedrolife", b: "0 reclamações", img: "/depoimentos/pedro.jpg", net: "tiktok" },
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl border bg-white shadow-sm p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Image src={t.img} alt={`${t.a} – foto do perfil`} width={72} height={72} className="rounded-full object-cover border border-neutral-200" />
                  <div className="flex-1">
                    <div className="text-sm text-amber-500" aria-hidden>★★★★★</div>
                    <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#F1ECFF] text-[#6C63FF]">{t.b}</span>
                    <div className="mt-2 flex items-center gap-2 text-sm text-neutral-800">
                      <span className="font-medium">{t.a}</span>
                      {t.h ? (
                        <div className="inline-flex items-center gap-2">
                          {(() => {
                            const nets = Array.isArray(t.net) ? (t.net as string[]) : (t.net ? [t.net as string] : [])
                            return nets.map((n: string, idx: number) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-[#888] hover:text-neutral-700 transition"
                                role="img"
                                aria-label={`Perfil no ${n === 'instagram' ? 'Instagram' : 'TikTok'}`}
                                title={`Perfil no ${n === 'instagram' ? 'Instagram' : 'TikTok'}`}
                              >
                                {n === 'instagram' ? (
                                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <circle cx="17.5" cy="6.5" r="1"></circle>
                                  </svg>
                                ) : (
                                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                    <path d="M9 3v9.2a3.3 3.3 0 1 1-2.2 3.1V7h6.2c.7 1.8 2.5 3 4.5 3v2.3c-2.8 0-5.2-1.6-6.3-3.9H9z"></path>
                                  </svg>
                                )}
                                <span className="text-neutral-600">{t.h}</span>
                              </span>
                            ))
                          })()}
                        </div>
                      ) : null}
                    </div>
                    <p className="mt-2 text-neutral-800">“{t.q}”</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </Visible>

      {/* Resultados (exemplos ilustrativos) */}
      <section id="resultados" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Resultados</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Vendas mensais */}
            <Card className="p-6">
              <div className="text-sm font-medium">Vendas mensais (R$)</div>
              <svg viewBox="0 0 220 120" className="mt-4 w-full">
                <rect x="0" y="0" width="220" height="120" rx="8" fill="#fff" />
                {/* eixo */}
                <line x1="20" y1="100" x2="210" y2="100" stroke="#e5e7eb" />
                {/* barras */}
                {[
                  { m: "Jan", v: 8 },
                  { m: "Fev", v: 12 },
                  { m: "Mar", v: 18 },
                  { m: "Abr", v: 22 },
                  { m: "Mai", v: 28 },
                  { m: "Jun", v: 31 },
                ].map((d, i) => {
                  const x = 25 + i * 30
                  const h = d.v * 2.4 // escala simples
                  return (
                    <g key={d.m}>
                      <rect x={x} y={100 - h} width="18" height={h} rx="4" fill="#FF4C29" />
                      <text x={x + 9} y="110" textAnchor="middle" fontSize="8" fill="#6b7280">{d.m}</text>
                    </g>
                  )
                })}
              </svg>
              <></>
            </Card>

            {/* ROI médio donut */}
            <Card className="p-6">
              <div className="text-sm font-medium">ROI médio — donut</div>
              <svg viewBox="0 0 120 120" className="mt-4 w-full">
                <circle cx="60" cy="60" r="45" fill="#fff" />
                <circle cx="60" cy="60" r="35" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                {/* retorno */}
                <circle cx="60" cy="60" r="35" fill="none" stroke="#6C63FF" strokeWidth="10" strokeDasharray="220 220" strokeDashoffset="40" transform="rotate(-90 60 60)" />
                {/* investimento */}
                <circle cx="60" cy="60" r="25" fill="none" stroke="#FF4C29" strokeWidth="10" />
                <text x="60" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111">3,1x</text>
              </svg>
              <></>
            </Card>

            {/* Ticket médio por nicho */}
            <Card className="p-6">
              <div className="text-sm font-medium">Ticket médio por nicho</div>
              <svg viewBox="0 0 220 120" className="mt-4 w-full">
                <line x1="20" y1="100" x2="210" y2="100" stroke="#e5e7eb" />
                {[
                  { n: "Fitness", v: 119 },
                  { n: "Beauty", v: 97 },
                  { n: "Lifestyle", v: 109 },
                  { n: "Geek", v: 89 },
                ].map((d, i) => {
                  const x = 35 + i * 45
                  const h = (d.v / 130) * 80
                  return (
                    <g key={d.n}>
                      <rect x={x} y={100 - h} width="28" height={h} rx="4" fill="#6C63FF" />
                      <text x={x + 14} y="110" textAnchor="middle" fontSize="8" fill="#6b7280">{d.n}</text>
                      <text x={x + 14} y={100 - h - 4} textAnchor="middle" fontSize="8" fill="#6b7280">R$ {d.v}</text>
                    </g>
                  )
                })}
              </svg>
              <></>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section id="comparativo" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Fazendo sozinho vs Com a Brand Launch</h2>
          <p className="mt-2 text-center text-neutral-600">Veja por que mais de 500 influenciadores escolheram a Brand Launch</p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Tempo — Fazendo Sozinho */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                  <Clock className="size-4 text-neutral-500" /> Tempo — Fazendo Sozinho
                </div>
                <div className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-100">
                  <CircleX className="size-4 text-neutral-500" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-bold text-neutral-900">6–12 meses</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Pesquisar fornecedores</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Criar designs sozinho</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Configurar loja</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Testar qualidade</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Ajustar problemas</li>
              </ul>
            </Card>

            {/* Tempo — Com a Brand Launch */}
            <Card className="border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                  <Clock className="size-4 text-[var(--color-secondary)]" /> Tempo — Com a Brand Launch
                </div>
                <div className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                  <CircleCheck className="size-4 text-[var(--color-secondary)]" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">20 dias</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Briefing de 1 hora</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Designs profissionais prontos</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Loja configurada</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Qualidade garantida</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Suporte completo</li>
              </ul>
            </Card>

            {/* Custo — Fazendo Sozinho */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                  <DollarSign className="size-4 text-neutral-500" /> Custo — Fazendo Sozinho
                </div>
                <div className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-100">
                  <CircleX className="size-4 text-neutral-500" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-bold text-neutral-900">R$ 8.000 – R$ 15.000</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Designer freelancer: R$ 2.000</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Desenvolvedor web: R$ 3.000</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Estoque inicial: R$ 5.000</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Testes e erros: R$ 2.000</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Marketing: R$ 3.000</li>
              </ul>
            </Card>

            {/* Custo — Com a Brand Launch */}
            <Card className="border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                  <DollarSign className="size-4 text-[var(--color-secondary)]" /> Custo — Com a Brand Launch
                </div>
                <div className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                  <CircleCheck className="size-4 text-[var(--color-secondary)]" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">A partir de R$ 4.999</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Tudo incluso no pacote</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Sem custos de estoque</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Sem riscos de produto parado</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Marketing incluso</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> ROI garantido</li>
              </ul>
            </Card>

            {/* Esforço — Fazendo Sozinho */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                  <Zap className="size-4 text-neutral-500" /> Esforço — Fazendo Sozinho
                </div>
                <div className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-100">
                  <CircleX className="size-4 text-neutral-500" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-bold text-neutral-900">Alto estresse</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Gerenciar múltiplos fornecedores</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Lidar com problemas de qualidade</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Aprender sobre e-commerce</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Cuidar da logística</li>
                <li className="flex items-center gap-2"><CircleX className="size-4 text-neutral-400" /> Resolver reclamações</li>
              </ul>
            </Card>

            {/* Esforço — Com a Brand Launch */}
            <Card className="border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                  <Zap className="size-4 text-[var(--color-secondary)]" /> Esforço — Com a Brand Launch
                </div>
                <div className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                  <CircleCheck className="size-4 text-[var(--color-secondary)]" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">Foco no conteúdo</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Apenas criar conteúdo</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Receber relatórios prontos</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Suporte especializado</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Operação automatizada</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Mais tempo para audiência</li>
              </ul>
            </Card>
          </div>

          {/* CTA final da seção */}
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
            <div className="text-xl font-semibold">A escolha é simples</div>
            <p className="mt-2 text-neutral-600">Economize tempo, dinheiro e dor de cabeça. Comece hoje mesmo.</p>
            <CtaLink
              href="#lead"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--color-secondary)] px-5 py-3 text-white shadow-sm transition hover:brightness-90"
            >
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 px-2 py-1 text-xs text-white">
                  <span className="inline-block size-2 rounded-full bg-emerald-400" /> Mais de R$ 5.000 de economia
                </span>
              </span>
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl text-center">Escolha seu plano</h2>
          <p className="mt-2 text-center text-neutral-600">Defina o melhor formato para lançar e crescer sua marca</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Setup */}
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-base md:text-lg font-semibold text-neutral-900">Setup</div>
                  <div className="mt-1 text-lg font-semibold text-neutral-900">Lançamento completo em 20 dias</div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2 flex-nowrap">
                <div className="text-3xl font-extrabold text-[var(--color-primary)] whitespace-nowrap">R$ 4.999</div>
                <div className="text-xs md:text-sm text-neutral-500 whitespace-nowrap">pagamento único</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><Rocket className="size-4 text-[var(--color-secondary)]" /> Marca pronta em até 20 dias</li>
                <li className="flex items-center gap-2"><Package className="size-4 text-[var(--color-secondary)]" /> Loja configurada, pagamento e logística inclusos</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Qualidade garantida e primeira coleção no ar</li>
              </ul>
              <CtaLink
                href="#lead"
                aria-label="Quero lançar minha marca em 20 dias"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-5 py-3 text-white shadow-sm transition hover:brightness-90"
              >
                Quero lançar minha marca em 20 dias
              </CtaLink>
            </Card>

            {/* Gestão (mais popular) */}
            <Card className="relative border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 p-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-white shadow-sm">
                Mais popular
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-base md:text-lg font-semibold text-neutral-900">Gestão</div>
                  <div className="mt-1 text-lg font-semibold text-neutral-900">Crescimento contínuo com novos designs mensais + marketing profissional.</div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2 flex-nowrap">
                <div className="text-3xl font-extrabold text-[var(--color-primary)] whitespace-nowrap">R$ 1.949</div>
                <div className="text-xs md:text-sm text-neutral-500 whitespace-nowrap">por mês</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Novos designs todo mês</li>
                <li className="flex items-center gap-2"><Target className="size-4 text-[var(--color-secondary)]" /> Campanhas e marketing de performance</li>
                <li className="flex items-center gap-2"><Users className="size-4 text-[var(--color-secondary)]" /> Operação, suporte e relatórios de vendas</li>
              </ul>
              <CtaLink
                href="#lead"
                aria-label="Quero crescer minha marca com gestão mensal"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-secondary)] px-5 py-3 text-white shadow-sm transition hover:brightness-90"
              >
                Quero crescer com gestão mensal
              </CtaLink>
            </Card>

            {/* Híbrido */}
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-base md:text-lg font-semibold text-neutral-900">Híbrido</div>
                  <div className="mt-1 text-lg font-semibold text-neutral-900">Zero risco inicial — só crescemos se você crescer</div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2 flex-nowrap">
                <div className="text-3xl font-extrabold text-[var(--color-primary)] whitespace-nowrap">30%</div>
                <div className="text-xs md:text-sm text-neutral-600 whitespace-nowrap">das vendas</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><Coins className="size-4 text-[var(--color-secondary)]" /> Sem mensalidade: só 30% das vendas</li>
                <li className="flex items-center gap-2"><CircleCheck className="size-4 text-[var(--color-secondary)]" /> Alinhado à performance: crescemos junto com você</li>
                <li className="flex items-center gap-2"><Target className="size-4 text-[var(--color-secondary)]" /> Gestão completa e foco em resultados</li>
              </ul>
              <div className="mt-4 text-sm text-neutral-600">Ideal para influenciadores que querem escalar sem risco</div>
              <CtaLink
                href="#lead"
                aria-label="Quero conhecer o plano Híbrido"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:brightness-90"
              >
                Quero conhecer o Híbrido
              </CtaLink>
            </Card>
          </div>

          {/* Prova social abaixo dos cards */}
          <div className="mt-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-700">
              <span className="inline-block size-2 rounded-full bg-emerald-500" aria-hidden></span>
              +3 marcas já lançadas em 2025 com esses planos
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "Qual o prazo para lançar minha marca?",
                a:
                  "O prazo total é de 20 dias úteis. Isso inclui a criação dos designs, configuração da loja e sua página personalizada. Trabalhamos de forma acelerada para que você possa começar a vender o quanto antes.",
              },
              {
                q: "Como funciona a logística?",
                a:
                  "Nossa plataforma parceira cuida de toda a operação: produção sob demanda, estoque, envio e atendimento ao cliente. Você recebe uma comissão de cada venda sem se preocupar com logística. É o modelo perfeito para influenciadores.",
              },
              {
                q: "Existem custos extras (ex.: Reserva INK)?",
                a:
                  "Sim. A Brand Launch cuida de marca, site e marketing. A infraestrutura da loja é da Reserva INK e é contratada diretamente na plataforma (a partir de R$ 159/mês). Deixamos tudo configurado e transparente.",
              },
              {
                q: "Posso usar minha própria logo e identidade?",
                a:
                  "Sim! Você mantém todos os direitos autorais da sua marca. Adaptamos nossa metodologia à sua identidade visual existente ou criamos uma nova do zero, seguindo suas diretrizes e preferências.",
              },
              {
                q: "Como funciona o pagamento?",
                a:
                  "O plano Setup é pago uma única vez. Os planos mensais são cobrados via PIX ou cartão. No plano Híbrido, não há mensalidade: cobramos 30% das vendas. Sem pegadinhas ou taxas ocultas.",
              },
              {
                q: "Que tipo de suporte recebo?",
                a:
                  "Oferecemos suporte completo via WhatsApp, com tempo de resposta de até 2 horas em horário comercial. Clientes dos planos mensais têm suporte prioritário e acesso a relatórios detalhados de performance.",
              },
            ].map((f) => (
              <details key={f.q} className="rounded-lg border p-4">
                <summary className="cursor-pointer list-none text-base font-medium">{f.q}</summary>
                <p className="mt-2 text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta-final" className="bg-gradient-to-b from-neutral-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Pronto para transformar sua audiência em vendas?</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink
              href="#lead"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 text-white shadow-sm transition hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 focus-visible:ring-offset-2"
            >
              Quero lançar minha marca agora
            </CtaLink>
            <a href="#como-funciona" className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
              Ver como funciona
            </a>
          </div>
          <></>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-neutral-500 md:flex-row">
          <div>© {new Date().getFullYear()} BrandLaunch. Todos os direitos reservados.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-900" href="/privacy">Política de Privacidade</a>
            <a className="hover:text-neutral-900" href="#">Termos</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function LeadFormSection() {
  return (
    <section id="lead" className="mx-auto max-w-3xl px-6 py-16">
      <Card>
        <CardHeader>
          <CardTitle>Entre para a lista de espera</CardTitle>
          <CardDescription>Respondo em até 24h com próximos passos.</CardDescription>
        </CardHeader>
        <CardContent>
          <LeadForm />
        </CardContent>
      </Card>
    </section>
  )
}