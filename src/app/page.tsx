import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            BrandLaunch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-prose">
            Conecte sua influência a uma linha de produtos — sem lidar com produção
            e logística. Apresente sua marca, venda sem estoque e monetize com
            praticidade.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#lead"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 font-medium hover:opacity-90 transition"
            >
              Quero lançar minha marca
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition"
            >
              Ver benefícios
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full rounded-xl border overflow-hidden">
          <Image src="/next.svg" alt="BrandLaunch" fill className="object-contain p-10 dark:invert" />
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Por que o BrandLaunch?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Rapidez</h3>
            <p className="text-muted-foreground mt-2">Lance rápido com parceiros validados e processo simplificado.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Zero estoque</h3>
            <p className="text-muted-foreground mt-2">Produção sob demanda e fulfillment integrado — sem dor de cabeça.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Monetização fácil</h3>
            <p className="text-muted-foreground mt-2">Foque na sua audiência; nós cuidamos do resto.</p>
          </div>
        </div>
      </section>

      {/* Depoimentos (mock) */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Depoimentos</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <blockquote className="rounded-xl border p-6 text-sm text-muted-foreground">
            &quot;Em semanas já tínhamos um drop no ar. Sem estoque, sem complicação.&quot;
            <div className="mt-3 font-medium text-foreground">@criadora_fitness</div>
          </blockquote>
          <blockquote className="rounded-xl border p-6 text-sm text-muted-foreground">
            &quot;Finalmente consegui lançar minha marca sem travar na logística.&quot;
            <div className="mt-3 font-medium text-foreground">@gamer_tech</div>
          </blockquote>
          <blockquote className="rounded-xl border p-6 text-sm text-muted-foreground">
            &quot;Processo simplificado e suporte em cada etapa. Recomendo.&quot;
            <div className="mt-3 font-medium text-foreground">@beauty_daily</div>
          </blockquote>
        </div>
      </section>

      {/* Formulário de captação */}
      <section id="lead" className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto rounded-xl border p-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Entre para a lista de espera</h2>
          <p className="text-muted-foreground mt-2">Preencha seus dados e avisaremos sobre os próximos passos.</p>
          <form className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Nome</label>
              <input id="name" className="h-11 rounded-md border px-3 bg-background" placeholder="Seu nome" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">E-mail</label>
              <input id="email" type="email" className="h-11 rounded-md border px-3 bg-background" placeholder="voce@email" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="social" className="text-sm font-medium">Rede social</label>
              <input id="social" className="h-11 rounded-md border px-3 bg-background" placeholder="@usuario" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="niche" className="text-sm font-medium">Nicho</label>
              <input id="niche" className="h-11 rounded-md border px-3 bg-background" placeholder="Ex.: fitness, beleza, tech" />
            </div>
            <button type="button" className="h-11 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90">Quero lançar minha marca</button>
            <p className="text-xs text-muted-foreground">Ao enviar, você concorda com nossa política de privacidade.</p>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="container mx-auto px-6 py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} BrandLaunch. Todos os direitos reservados.
      </footer>
    </div>
  );
}
