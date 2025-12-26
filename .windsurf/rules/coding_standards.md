# Reguli de Codare

## Standarde Generale
1. **TypeScript Strict**: Tot codul trebuie să treacă `tsc --strict`
2. **Formatare**: Folosiți Prettier cu configurările din `.prettierrc`
3. **Linting**: ESLint cu reguli de securitate activate

## Securitate
1. **Validare intrare**: Toate input-urile trebuie validate cu Zod
2. **Autentificare**: Folosiți Auth.js cu provideri OAuth 2.0
3. **Secrete**: Niciodată în git - folosiți variabile de mediu

## Performanță
1. **Limitare cereri**: Implementare rate limiting pe nivel endpoint
2. **Caching**: Folosiți Redis pentru rezultate costisitoare
3. **Logare structurată**: Folosiți Pino sau Winston

## Testare
1. **Acoperire minimă**: 80% pentru module critice
2. **Teste de securitate**: OWASP ZAP în pipeline-ul CI
3. **Teste end-to-end**: Cel puțin pentru fluxurile principale
