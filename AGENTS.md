# Instrucțiuni pentru AI (Advertising AI Enterprise) – versiune complet în română

> Ghid pentru asistenții AI care lucrează în acest repo. Partenerul NU este tehnic; AI-ul trebuie să facă tot: citire, creare, modificare, ștergere fișiere, rulare comenzi.

## Stack real (din Modrux)

- Frontend: Next.js 16 + React 19 + TypeScript 5
- Styling: Tailwind CSS 4
- Backend: Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- AI: OpenAI API (GPT-4)
- Email: Resend
- Plăți: Stripe (planificat)
- Deploy: Vercel
- Testare: Vitest + Playwright + Testing Library

## Structura proiectului (pe scurt)

```text
src/app           – rute Next.js (App Router)
src/components    – componente UI (server/client)
src/lib           – servicii, clienți API, utilitare
supabase          – migrații, funcții edge, config
tests             – unit / integration / e2e
.windsurf/rules   – reguli pentru AI (cod, securitate, teste)
```

## Cum să lucreze AI-ul (reguli esențiale)

### ✅ Fă

1. Respectă regulile din `.windsurf/rules/` (coding-standards, security, testing).
2. Folosește componente server implicit; `\"use client\"` doar dacă e nevoie.
3. Validează cu Zod; tiparește strict TypeScript (fără `any`).
4. Scrie teste pentru fluxuri critice (auth, plăți, mutații).
5. Păstrează funcțiile scurte (responsabilitate unică).

### ❌ Nu face

1. Nu atinge fișiere `.env*`; nu hardcoda chei/secrete.
2. Nu duplica utilitare (verifică `src/lib` înainte).
3. Nu folosi pattern-uri vechi: `pages/`, class components, `getServerSideProps`.

## Comenzi uzuale

```bash
npm run dev        # server dev
npm run build      # build prod
npm run start      # start prod
npm test           # teste
npm run lint       # lint
npm run format     # prettier
npx supabase start # supabase local
npm run migrate    # migrații
```

## Proces de lucru

1) Cercetare: caută pattern-uri existente (`grep`/`search`), citește regulile.
2) Implementare: scrie test pentru flux critic, aplică pattern-urile existente.
3) Verificare: `npm run lint && npm test && npm run build`.
4) Securitate: verifică să nu fie secrete în diff, nu stage-ui `.env*`.

## Principii arhitecturale

- Server-first, tipare stricte, validare runtime (Zod).
- Securitate: input validat, queries parametrizate, CSP.
- Observabilitate: logging structurat, Sentry/metrics.
- Testabilitate: funcții pure, DI, mocking pentru servicii externe.

## Cum ajuți partenerul non-tehnic (Windsurf)

1. Încarcă MCP (filesystem pe `/home/raulm/START`, GitHub, Brave).
2. Cere-i partenerului doar ce vrea să obțină („vreau pagină produse”, „configurează email”).
3. AI execută tot: creează fișiere, editează, rulează comenzi, explică pașii minimi pe înțelesul lui.
4. Nu cere cunoștințe de cod; oferă butoane/comenzi copy-paste dacă e nevoie.

## Exemple de prompt pentru partener (în română)

```text
„Vreau să instalezi dependențele și să pornești proiectul.”
„Adaugă o pagină nouă pentru produse cu listă și filtru.”
„Configurează MCP și verifică că AI are acces la tot workspace-ul.”
„Scrie teste pentru login și checkout.”
```

## Dacă ai nevoie de clarificări

- Securitate sau plăți: cere aprobare înainte de schimbări majore.
- Arhitectură nouă: propune design scurt înainte de implementare.
- API extern: verifică documentația și pattern-urile existente în `src/lib`.

---

**Ține minte**: produs enterprise. Prioritizează corectitudinea și securitatea; când ai dubii, întreabă. AI are voie să citească/scrie orice fișier din workspace pentru a livra rapid.
