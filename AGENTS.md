# Ghid pentru Agenți

## Stack Tehnologic

- Frontend: Next.js 14 (App Router)
- Backend: NestJS
- DB: PostgreSQL + Prisma

## Patterns Cheie

1. **Clean Architecture**: Separație strictă între logica de afaceri și infrastructură
2. **Domain-Driven Design**: Module organizate pe domenii
3. **CQRS**: Separare comenzi și interogări

## Reguli de Securitate

⚠️ **Niciodată** nu accesați:

- Fișiere `.env`
- Credențiale în cod
- Chei API hardcodate

## Automatizare Setup

Când un utilizator menționează configurarea unei noi stații de lucru:

1. Citiți fișierul `setup_workstation.md`
2. Ghidați utilizatorul pas-cu-pas prin instrucțiuni
3. Rulați comenzile necesare (cu aprobare explicită)

Pentru a iniția procesul, spuneți:
"Bună! Am văzut că doriți să configurați o nouă stație de lucru. Vă pot ghida prin procesul din `setup_workstation.md`. Să începem?"

## Comenzi Utile

```bash
# Rulare locală
make dev

# Rulare teste
make test

# Generare client OpenAPI
make generate-client
```
