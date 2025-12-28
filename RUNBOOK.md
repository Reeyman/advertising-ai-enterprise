# MANUAL: Configurare Enterprise pentru Advertising AI

## 1. Pregătire Laptop

### Extensii VS Code Obligatorii

1. **ESLint** - Analiză cod în timp real
2. **Docker** - Management containere
3. **GitLens** - Vizualizare istoric Git
4. **Windsurf** - Asistență AI integrată

### Setări Sistem Recomandate

- **Windows 11**:
  ```powershell
  wsl --install
  ```
- **Ubuntu**:
  ```bash
  sudo apt install -y git docker.io nodejs npm python3 make
  ```

## 2. Configurare Mediu Dezvoltare

### Instalare Unelte

```bash
# Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20

# Python
python -m venv .venv
source .venv/bin/activate

# Docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

## 3. Conturi și Chei API

### Listă Conturi Obligatorii

1. [GitHub](https://github.com) - Gestionare cod sursă
2. [OpenAI](https://platform.openai.com) - Acces modele AI
3. [Vercel](https://vercel.com) - Hosting frontend
4. [Supabase](https://supabase.com) - Baze de date

### Gestionare Chei

```bash
# Fișier .env
OPENAI_API_KEY=cheia_ta
SUPABASE_URL=url_proiect
SUPABASE_KEY=cheia_ta
```

## 4. Configurare Windsurf

### Instalare Extensie

1. Instalați extensia VS Code
2. Configurați în `~/.codeium/mcp_config.json`:

```json
{
  "servers": [
    {
      "name": "GitHub",
      "type": "github",
      "config": {
        "token": "${GITHUB_TOKEN}"
      }
    },
    {
      "name": "Brave Search",
      "type": "brave-search",
      "config": {
        "api_key": "${BRAVE_API_KEY}"
      }
    }
  ]
}
```

## 5. Configurare GitHub

### Creare Repository

1. **Creare Repository Manual**:
   - Mergeți la [github.com/new](https://github.com/new)
   - Proprietar: Reeyman
   - Nume repository: `advertising-ai-enterprise`
   - Vizibilitate: Privat
   - Lăsați toate celelalte opțiuni neselectate
   - Faceți clic pe "Creați repository"

2. **Push Code**:

```bash
git remote add origin https://github.com/Reeyman/advertising-ai-enterprise.git
git branch -M main
git push -u origin main
```

## 6. Configurare Produs (MVP)

### Structură Monorepo

```bash
# Creare structură monorepo
mkdir -p apps/web apps/api packages/shared infra docs
```

## 7. Configurare Deploy

### Terraform Init

```bash
# Inițializare Terraform
cd infra
terraform init
```

### Vercel Deploy

```bash
# Deploy Vercel
vercel link
vercel env pull .env.local
```

## 8. Checklist DoD

- [ ] Laptop: Toate dependențe instalate
- [ ] Dev: SSH configurat, pre-commit instalat
- [ ] Windsurf: MCP configurat
- [ ] GitHub: Repo, branch protection, Actions
- [ ] Produs: Structură creată
- [ ] Deploy: Pipeline CI/CD funcțional
