# TODO: Configurare Stație de Lucru

## Windows 11

1. **Enable WSL2**:

   ```powershell
   wsl --install
   wsl --set-default-version 2
   # Reboot when prompted
   ```

2. **Instalare Ubuntu**:

   - Deschide Microsoft Store → Instalează "Ubuntu"
   - Lansează Ubuntu → Creează nume de utilizator/parolă

3. **Instalare Dependințe**:

   ```bash
   sudo apt update
   sudo apt install -y git nodejs npm python3 python3-pip make
   ```

4. **Instalare Docker Desktop**:

   - Descarcă de pe [docker.com](https://www.docker.com/products/docker-desktop/)
   - Activează "Use WSL 2 based engine" în setări

5. **Verificare Instalări**:
   ```bash
   git --version
   node --version
   npm --version
   python3 --version
   make --version
   docker --version
   ```

## Listă Extensii VS Code

1. **Windsurf** - Asistent AI
2. **ESLint** - Analiză cod
3. **Docker** - Management containere
4. **GitLens** - Vizualizare istoric Git
5. **Prettier** - Formatare automată

## 1. Configurare Git

Setează identitatea:

```bash
git config --global user.name "Numele Tău"
git config --global user.email "email@example.com"
```

## 2. Configurare SSH

```bash
ssh-keygen -t ed25519 -C "email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## 3. Instalare Windsurf Extensions

- Python
- ESLint
- Docker
- GitLens

## 4. Configurare MCP

Creează `~/.codeium/mcp_config.json`:

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

## 5. Clonare Repository

```bash
git clone https://github.com/your-org/advertising-ai-enterprise.git
cd advertising-ai-enterprise
```

## 6. Rulare Script de Instalare

```bash
npm run setup
```
