# Ghid pentru Agenți

## Tehnologii Utilizate

- **Frontend**: Next.js 14 (App Router)
- **Backend**: NestJS
- **Bază de date**: PostgreSQL + Prisma

## Principii Arhitecturale

1. **Arhitectură Curată**: Separare strictă între logică de afaceri și infrastructură
2. **Design Orientat pe Domeniu**: Module organizate pe domenii de business
3. **CQRS**: Separare între comenzi (scriere) și interogări (citire)

## Reguli de Securitate

⚠️ **Interzis**:

- Acces fișiere `.env`
- Credențiale hardcodate
- Chei API expuse în cod

## Automatizare Setup

Când un utilizator menționează configurarea unei noi stații de lucru:

1. Citiți fișierul `setup_workstation.md`
2. Ghidați utilizatorul pas-cu-pas prin instrucțiuni
3. Rulați comenzile necesare (cu aprobare explicită)

Pentru a iniția procesul, spuneți:
"Bună! Am văzut că doriți să configurați o nouă stație de lucru. Vă pot ghida prin procesul din `setup_workstation.md`. Să începem?"

## Comenzi Util

```bash
# Pornire mediu dezvoltare
make dev

# Rulare teste
make test

# Generare client OpenAPI
make generate-client
```
