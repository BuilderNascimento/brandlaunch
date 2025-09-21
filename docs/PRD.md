# PRD - BrandLaunch

## Visão Geral
O BrandLaunch é uma landing page que conecta influenciadores à possibilidade de lançar sua própria linha de produtos sem complicação. A página apresenta o conceito, os benefícios e captura leads de criadores interessados em participar (lista de espera / CRM).

## Objetivos
- Apresentar claramente a proposta de valor e diferenciais.
- Validar interesse por meio de captação de contatos qualificados.
- Facilitar integração com ferramentas de marketing (e-mail e analytics).

## Público-Alvo
Influenciadores digitais e criadores de conteúdo interessados em monetizar sua audiência com produtos personalizados, sem lidar com produção e logística.

## Processo Principal (Usuário)
1. Acessa a landing page.
2. Entende proposta e benefícios.
3. Preenche formulário (nome, e-mail, rede social, nicho).
4. Envia dados e recebe feedback visual (toast/alerta) e e-mail de confirmação (futuro).

## Funcionalidades Core
- Hero com headline, subheadline e CTA principal “Quero lançar minha marca”.
- Seção de benefícios (rapidez, zero estoque, monetização fácil).
- Depoimentos/cases (mock inicial, reais quando disponíveis).
- Formulário de captação validado (nome, e-mail, rede social, nicho) com Zod + React Hook Form.
- Integrações de tracking (Google Analytics/Meta Pixel) configuráveis.

## Requisitos Técnicos
- Framework: Next.js 15 (App Router), TypeScript, Tailwind CSS v4.
- UI: shadcn/ui + Radix UI (alert/dialog/toast) e sonner.
- Formulário: react-hook-form + zod + @hookform/resolvers.
- Alias de import: @/*.
- Acessibilidade: boas práticas (aria-*, foco, contraste), Radix como base.
- Build: Vercel-ready.

## Dados (Mock Inicial)
- Depoimentos estáticos em src/lib/mock-data/testimonials.ts.

## Segurança e Privacidade
- Sanitização de inputs e validações no client; sem dados sensíveis.
- Política de privacidade (link de placeholder).
- Não armazenar tokens/secrets no cliente; variáveis sensíveis via .env (futuro backend/integrador).

## Métricas de Sucesso
- CTR do CTA principal.
- Taxa de submissão do formulário.
- Taxa de erro/validação no formulário.

## Roadmap Próximo
- Integração com Mailchimp/Brevo/ConvertKit via API de backend (rota /api/subscribe).
- Adição de termos/consentimento para LGPD.
- Otimizar SEO (metatags, OG, sitemap).