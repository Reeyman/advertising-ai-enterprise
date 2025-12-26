# RUNBOOK: Advertising AI Enterprise Setup

## 1. Setup Laptop

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install -y git docker.io nodejs npm python3 python3-pip make

# Verify installations
git --version
docker --version
node --version
npm --version
python3 --version
make --version
```

### macOS (Homebrew)

```bash
brew install git node docker python make

# Verify installations
git --version
node --version
docker --version
python --version
make --version
```

### Windows 11

1. **Enable WSL2**:

   - Open PowerShell as Administrator

   ```powershell
   wsl --install
   wsl --set-default-version 2
   ```

   - Reboot when prompted

2. **Install Ubuntu**:

   - Open Microsoft Store and install "Ubuntu"
   - Launch Ubuntu and create a user account

3. **Update Ubuntu**:

   ```bash
   sudo apt update
   sudo apt upgrade
   ```

4. **Install Dependencies**:

   ```bash
   sudo apt install -y git nodejs npm python3 python3-pip make
   ```

5. **Install Docker Desktop**:

   - Download from [docker.com](https://www.docker.com/products/docker-desktop/)
   - Enable "Use WSL 2 based engine" in settings

6. **Verify Installations**:
   ```bash
   git --version
   node --version
   npm --version
   python3 --version
   make --version
   docker --version
   ```

### Windows (WSL2)

```bash
wsl --install -d Ubuntu
# After reboot, run Ubuntu commands

# In Ubuntu:
sudo apt update
sudo apt install -y git nodejs npm python3 python3-pip make
```

## 2. Setup Dev Environment

```bash
# Node.js (via nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20

# Python virtual environment
python -m venv .venv
source .venv/bin/activate

# Docker
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
newgrp docker

# Verify Docker
docker run hello-world

# SSH & Git
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add SSH key to GitHub
cat ~/.ssh/id_ed25519.pub
# Copy output and add to GitHub SSH keys
```

## 3. Setup Windsurf

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

1. Adăugați variabilele în `.env` (NU în git)

## 4. Setup GitHub

### Troubleshooting

If you get "Bad credentials" when creating the repository:

1. Regenerate your GitHub token at [github.com/settings/tokens](https://github.com/settings/tokens)
2. Ensure it has the `repo` scope
3. Set it in your environment:

```bash
export GITHUB_TOKEN=new_token
```

1. **Create Personal Access Token**:

   - Go to [github.com/settings/tokens](https://github.com/settings/tokens)
   - Generate new token with `repo` scope
   - Copy the token (treat it as a password)

2. **Create Repository via CLI**:

```bash
# Set token as environment variable
export GITHUB_TOKEN=your_token

# Create repo
curl -X POST -H "Authorization: token $GITHUB_TOKEN" \
  -d '{"name":"advertising-ai-enterprise","private":true}' \
  https://api.github.com/user/repos
```

3. **Push Code**:

```bash
git remote add origin https://github.com/<your-username>/advertising-ai-enterprise.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

4. **Configure Branch Protection**:

   - Go to Settings → Branches → Add branch protection rule
   - Branch name pattern: `main`
   - Require pull request reviews before merging: 1 reviewer
   - Require status checks to pass before merging
     - Add status check: `ci`
   - Save changes

5. Protecție branch:

```yaml
# .github/branch_protection.yml
main:
  required_status_checks:
    strict: true
    contexts: [ci]
  required_pull_request_reviews:
    required_approving_review_count: 1
```

## 5. Setup Produs (MVP)

```bash
# Structură monorepo
mkdir -p apps/web apps/api packages/shared infra docs
```

## 6. Setup Deploy

```bash
# Terraform init
cd infra
terraform init

# Vercel deploy
vercel link
vercel env pull .env.local
```

## 7. Checklist DoD

- [ ] Laptop: Toate dependențe instalate
- [ ] Dev: SSH configurat, pre-commit instalat
- [ ] Windsurf: MCP configurat
- [ ] GitHub: Repo, branch protection, Actions
- [ ] Produs: Structură creată
- [ ] Deploy: Pipeline CI/CD funcțional
