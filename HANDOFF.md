# Handoff — Projeto Sandrä Costa (conselho-intuitivo)

## Estado atual (11/06/2026)

### Stack
- Next.js 16.2.9 + Turbopack + App Router + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` em globals.css)
- Fontes: `next/font/google` com `preload: false` (sem internet na máquina)
- DB: SQLite (dev) / PostgreSQL (prod) — auto-selecionado por DATABASE_URL
- JWT auth (jsonwebtoken + bcryptjs)
- @tabler/icons-react (sem emojis)

### Rodar o servidor
```
node node_modules/next/dist/bin/next dev
```
Porta 3000. Preview via `.claude/launch.json` → entry "conselho-intuitivo".

### Arquivos principais
| Arquivo | Descrição |
|---|---|
| `src/app/globals.css` | Tema terapêutico completo: `.bg-bamboo`, `.bg-yinyang`, `.bg-stone-texture`, `.card-therapeutic`, `.cta-primary/outline/ghost`, `.section-cream/stone/white`, `.divider-elegant` |
| `src/app/layout.tsx` | Fontes Quicksand + Yanone Kaffeesatz, preload:false |
| `src/components/SiteNavbar.tsx` | Link WA discreto "Agendar", sem botão grande |
| `src/components/SiteFooter.tsx` | "Sandrä Costa" com trema, fundo #163d1f |
| `src/components/sections/HeroSection.tsx` | bg-yinyang, cta-primary/ghost |
| `src/components/sections/AtendimentosSection.tsx` | Accordion idêntico ao de Cursos |
| `src/components/sections/SobreSection.tsx` | "Sandrä" trema, section-cream + bg-stone-texture |
| `src/components/sections/CursosFormacoesSection.tsx` | Accordion com CursoCard |
| `src/data/atendimentos.ts` | 14 atendimentos |
| `src/data/cursos.ts` | cursosFormacoesDiversos (6) + cursosMassagem (14) |
| `src/lib/db.ts` | Adapter SQLite/PostgreSQL |
| `src/lib/validation.ts` | normalizeWhatsApp, isValidTime, isValidEmail |
| `public/logo-placeholder.svg` | Logo placeholder (substituir por Logotipo.jpg real) |
| `public/assets/logotipo.svg` | SVG traçado do logo real de Sandrä |

### Logo real
O logo de Sandrä é um yin-yang calligráfico em "S" — cor #1E6F30 sobre branco.
- Arquivo SVG traçado: `public/assets/logotipo.svg`
- Se tiver o JPG original: salvar em `public/assets/Logotipo.jpg`

### O que falta fazer
1. **Logo**: Substituir `logo-placeholder.svg` pelo logo real em todo site
2. **Padrões com o logo**: Usar `public/assets/logotipo.svg` como:
   - Background Hero: grande, 5% opacidade, `background-image: url('/assets/logotipo.svg')`
   - Background SobreSection: médio, 8% opacidade
   - Divisores entre seções: linha + ícone do logo no centro
   - Footer: pequeno, elegante
   - Padrão wallpaper repetitivo (CSS `background-repeat`)
3. **Foto de Sandrä**: Inserir foto real em SobreSection
4. **Redes sociais**: Atualizar links reais (Instagram, TikTok, YouTube, Facebook, LinkedIn)
5. **PostgreSQL**: Configurar DATABASE_URL real em produção

### Paleta de cores
- Verde escuro: `#1E6F30`
- Verde médio: `#6CC24A`
- Verde suave: `#98BE98`
- Fundo creme: `#f7f9f4`
- Fundo pedra: `#f4f1ec`
- Fundo branco: `#fafcfa`

### Nome correto
**Sandrä Costa** — com trema no ä (não "Sandra"). Verificar em TODOS os textos.

### Contato
- WhatsApp: +55 11 9 5794-7776 → `https://wa.me/5511957947776`
- Email: contato@terapeutasandracosta.com.br
- Endereço: Rua João Zunta, 36 — Vila São Pedro — São Paulo SP 04676-080
- Site: terapeutasandracosta.com.br

### Como aplicar o logo como padrão de fundo (próxima conversa)
```css
/* Em globals.css — substitui .bg-yinyang atual */
.bg-logo-pattern {
  background-image: url('/assets/logotipo.svg');
  background-repeat: repeat;
  background-size: 120px 120px;
  opacity: 0.07;
}

/* Hero — logo grande centralizado */
.bg-logo-hero {
  background-image: url('/assets/logotipo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  opacity: 0.05;
}

/* Sobre — médio */
.bg-logo-sobre {
  background-image: url('/assets/logotipo.svg');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 40%;
  opacity: 0.08;
}
```
Aplicar como `<div className="absolute inset-0 bg-logo-hero pointer-events-none" />` dentro de cada seção.
