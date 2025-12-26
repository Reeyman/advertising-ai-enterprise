# Advertising AI Enterprise Platform

**End-to-end SaaS solution for AI-powered advertising campaigns**

## Core Components

1. **Marketing Website**: Next.js 14 (App Router), Tailwind CSS
2. **Application Dashboard**: React, shadcn/ui, TanStack Query
3. **Backend API**: NestJS, PostgreSQL, Redis, BullMQ
4. **AI Agents**: LangChain, OpenAI, Anthropic
5. **Infrastructure**: Terraform, AWS/GCP, Kubernetes

## Development Setup

### Prerequisites

- Node.js 20+
- Docker
- Terraform

### Installation

```bash
git clone https://github.com/your-org/advertising-ai-enterprise.git
cd advertising-ai-enterprise

# Install dependencies
npm run setup

# Start services
docker-compose up -d

# Run migrations
npm run db:migrate
```

### First Run

```bash
# Start frontend
cd apps/web
npm run dev

# Start backend
cd apps/api
npm run start:dev
```

## Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-org%2Fadvertising-ai-enterprise)

## Documentation

- [Architecture Decision Records](/docs/adr)
- [API Reference](/docs/api)
- [Testing Guidelines](/docs/testing)
