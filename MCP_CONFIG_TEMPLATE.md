# MCP Configuration Template for Windsurf

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/root/workspace/advertising-ai-enterprise"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token_here"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your_brave_api_key_here"
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://postgres:password@localhost:5432/advertising_ai"
      ]
    }
  }
}
```

## Setup Instructions

1. Create MCP config directory: `mkdir -p ~/.codeium`
2. Save this as `~/.codeium/mcp_config.json`
3. Replace placeholder values with your actual API keys
4. Restart Windsurf to enable MCP servers

## Required API Keys

- **GitHub**: Create personal access token at github.com/settings/tokens
- **Brave Search**: Get API key from brave.com/search/api
- **Postgres**: Use your Supabase connection string

## Verification

After setup, MCP servers should appear in Windsurf's context menu.
