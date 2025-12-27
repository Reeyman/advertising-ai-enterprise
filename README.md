# Advertising AI Enterprise – Ghid scurt în română (pentru partener non-tehnic)

**Scop:** Partenerul instalează Windsurf pe Windows și cere AI-ului să facă tot (creează/editează fișiere, rulează comenzi).

Dupa instalare creezi cont si folosesti free tier si modelul care il foloesti in Windsurf trebuie sa fie mereu SWE-1.5

**Documente utile:**

- `QUICK_START_WINDOWS.md` – pași copy-paste Windows + Windsurf + MCP
- `AGENTS.md` – instrucțiuni pentru AI (română)
- `MCP_CONFIG_TEMPLATE.md` – configurare MCP
- `RUNBOOK.md` / `RUNBOOK_PHASES_4-6.md` – detalii complete (engleză, dar ai rezumat în română la început)

## Ce conține proiectul (stack)

- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS 4
- Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- OpenAI API, Resend, Stripe (planificat), Vercel
- Teste: Vitest, Playwright, ESLint, Prettier

## Pași ultra-scurți (Windows + Windsurf)

1. Descarcă și instalează **Windsurf** (Windows).
2. Urmează pașii din `QUICK_START_WINDOWS.md` (PowerShell copy-paste):
   - Node.js 24 LTS, Git, Docker Desktop, Supabase CLI
   - Clonează repo-ul, `npm install`, `copy .env.example .env.local`
   - Configurează MCP (`.codeium/mcp_config.json`) pentru GitHub + Brave + filesystem (implicit).
3. Deschide Windsurf, încarcă workspace-ul, apoi deschide un chat nou și spune ce vrei (ex: „Instalează dependențele și pornește proiectul”).
4. AI-ul va crea/edita fișiere, va rula comenzi și îți va confirma pașii.

## Comenzi de bază (dacă vrei să le rulezi manual)

```bash
npm install
npm run dev        # pornește serverul dev
npm run lint       # verifică lint
npm test           # rulează testele
npm run build      # build prod
npx supabase start # supabase local
npm run migrate    # migrații
```

## Deploy

Apasă butonul Vercel sau folosește configurația existentă:
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-org%2Fadvertising-ai-enterprise)

## Dacă ai nevoie de mai mult

- Pentru setup detaliat: `RUNBOOK.md` (are rezumat în română la început, restul în engleză)
- Pentru MCP avansat: `MCP_CONFIG_TEMPLATE.md`
- Pentru instrucțiuni AI: `AGENTS.md` (română)
