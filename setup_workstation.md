# TODO: New Workstation Setup

## Windows 11

1. **Enable WSL2**:

   ```powershell
   wsl --install
   wsl --set-default-version 2
   # Reboot when prompted
   ```

2. **Install Ubuntu**:

   - Open Microsoft Store → Install "Ubuntu"
   - Launch Ubuntu → Create username/password

3. **Install Dependencies**:

   ```bash
   sudo apt update
   sudo apt install -y git nodejs npm python3 python3-pip make
   ```

4. **Install Docker Desktop**:

   - Download from [docker.com](https://www.docker.com/products/docker-desktop/)
   - Enable "Use WSL 2 based engine" in settings

5. **Verify Installations**:
   ```bash
   git --version
   node --version
   npm --version
   python3 --version
   make --version
   docker --version
   ```

## 1. Configure Git

Set your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 2. Setup SSH

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## 3. Install Windsurf Extensions

- Python
- ESLint
- Docker
- GitLens

## 4. Configure MCP

Create `~/.codeium/mcp_config.json`:

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

## 5. Clone Repository

```bash
git clone https://github.com/your-org/advertising-ai-enterprise.git
cd advertising-ai-enterprise
```

## 6. Run Setup Script

```bash
npm run setup
```
