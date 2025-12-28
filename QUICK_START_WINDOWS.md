# Start Rapid Windows — Advertising AI Enterprise (PROMPT unic de lipit în Windsurf / Cascade)

**Dacă nu ai Windsurf instalat:** descarcă de la [windsurf.ai](https://windsurf.ai), rulează installer ca Administrator, deschide Windsurf măcar o dată, apoi revino aici.

Obiectiv: după ce lipești promptul de mai jos în chat, AI (Cascade) face TOT setup-ul (WSL, Docker, MCP, repo, .env, extensii, build, commit/push).

````text
# CONTEXT
Ești Cascade (principal engineer + DevOps + security). Nu dai alternative și nu pui întrebări de preferințe.
Windows 11/10 + Windsurf instalat.
Vreau dev environment pe WSL2 (Ubuntu) + Docker Desktop.
Vreau MCP funcțional: GitHub + Brave Search + Filesystem (strict pe folderul proiectului).
Repo: advertising-ai-enterprise (GitHub).
Tokenuri (dacă lipsesc, îmi ceri DOAR tokenul lipsă, nimic altceva):
- GITHUB_PERSONAL_ACCESS_TOKEN = <ghp_...>
- BRAVE_API_KEY = <...>

# REGULI OBLIGATORII

1) Niciun secret în git. Nu scrii tokenuri în repo. `.env*` e ignorat; doar `.env.example` e în git.
2) MCP tokenurile stau doar în fișierul global mcp_config.json al Windsurf (nu în repo).
3) Pași în format fix:
   - (A) UNDE rulez: PowerShell (Admin) / PowerShell normal / WSL Ubuntu / Terminal din Windsurf
   - (B) COMANDA exactă
   - (C) CE output trebuie să văd (1–2 linii)
   După fiecare etapă majoră, îmi ceri să lipesc output-ul ca să confirmi și continui.
4) Menții “Cascade Gitignore Access” pe OFF.

## OBIECTIV

WSL2 + Ubuntu instalat; Docker Desktop funcțional pe WSL2; Node LTS + pnpm în WSL; Git + SSH în GitHub; MCP verzi (github, brave-search, filesystem); repo clonat, .env.local setat; `pnpm dev/lint/test/build` trecute; commit + push “chore: setup complet”.

## PASUL 1 — Verificare sistem (NU sari peste)

1. PowerShell: `wsl --status` și `wsl -l -v`. Dacă WSL lipsește sau nu e v2: PowerShell (Admin): `wsl --install -d Ubuntu`. Dacă cere restart: spune “RESTART NECESAR” și oprește.

## PASUL 2 — Docker Desktop (WSL2 backend)

2. PowerShell: `docker version`. Dacă lipsește: PowerShell (Admin): `winget install -e --id Docker.DockerDesktop`.
   Bifezi în Docker Desktop:
   - Settings → General: “Use the WSL 2 based engine”
   - Settings → Resources → WSL Integration: activează Ubuntu
   Verificare: PowerShell: `docker run hello-world`.

## PASUL 3 — Setup în Ubuntu (WSL)

3. WSL: `sudo apt update && sudo apt install -y git curl build-essential ca-certificates unzip jq`
4. Node LTS + pnpm (WSL):
   - instalezi nvm
   - instalezi Node LTS
   - activezi corepack și pnpm
   Verifici: `node -v` și `pnpm -v`.

## PASUL 4 — GitHub SSH

5. WSL:
   - `ssh-keygen -t ed25519 -C "advertising-ai-enterprise" -f ~/.ssh/id_ed25519 -N ""`
   - `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519`
   - `cat ~/.ssh/id_ed25519.pub`
   Oprește și spune-mi unde să o lipesc în GitHub (Settings → SSH keys).
6. Verificare: `ssh -T git@github.com`.

## PASUL 5 — MCP în Windsurf

7. Windsurf → Settings → Cascade → MCP Servers → “View raw config” (notează calea fișierului).
8. Pune EXACT acest JSON (doar tokenuri și calea proiectului se schimbă):

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<ghp_...>" }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@brave/brave-search-mcp-server", "--transport", "stdio"],
      "env": { "BRAVE_API_KEY": "<...>" }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\\\Users\\\\<user>\\\\work\\\\advertising-ai-enterprise"
      ]
    }
  }
}
````

Regulă: filesystem doar pe folderul repo. 9. Verifică MCP în Windsurf: toate VERZI; dacă nu, repari (npx, node, path, permisiuni).

## PASUL 6 — Clone + install + env

1. WSL:
   - `mkdir -p ~/work && cd ~/work`
   - `git clone git@github.com:<ORG_SAU_USER>/advertising-ai-enterprise.git`
   - `cd advertising-ai-enterprise`
2. `pnpm install`
3. Env:
   - copiază `.env.example` în `.env.local`
   - cere-mi valorile lipsă (ex: OPENAI_API_KEY etc.) și pune-le în `.env.local`
   - verifică `.env.local` în .gitignore.

## PASUL 7 — Extensii și setări Windsurf

1. Instalează extensiile în Windsurf:
   - ESLint
   - Prettier
   - GitLens
   - Docker
   - Tailwind CSS IntelliSense
   - EditorConfig
   - YAML (redhat.vscode-yaml)
   - Prisma (Prisma.prisma) — doar dacă repo-ul folosește Prisma
   - vscode-icons (sau tema repo)
   - (păstrează tema/icoanele existente dacă preferi)
2. Aplică setările din repo (.vscode/) dacă există.

## PASUL 8 — Rulează tot (repari erorile)

1. În WSL, root repo:
   - `pnpm dev` (confirmă că pornește), apoi oprește
   - `pnpm lint`
   - `pnpm test`
   - `pnpm build`
2. Dacă apare vreo eroare: repară, rerulează până trec toate; spune-mi scurt ce ai schimbat și de ce.

## PASUL 9 — Commit + push

1. `git status`
2. `git add .`
3. `git commit -m "chore: setup complet"`
4. `git push origin main` (dacă main e protejat: creezi branch + PR fără să întrebi).

## OUTPUT FINAL OBLIGATORIU

- Confirmare: WSL OK, Docker OK, MCP verde (3/3), repo clonat, install OK, dev/lint/test/build OK, push OK.
- Lista de comenzi rulate + rezultatul (succint).
- Ce ai reparat (dacă ai reparat ceva), în 3–6 bullet points.
