#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

const isDryRun = process.argv.includes('--dry-run')

console.log(`${isDryRun ? 'DRY RUN: ' : ''}Applying Supabase migrations...`)

try {
  const command = isDryRun 
    ? 'npx supabase db diff --schema public --use-migra'
    : 'npx supabase db push'
  
  console.log(`Running: ${command}`)
  execSync(command, { 
    encoding: 'utf8',
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  })
  
  console.log(`${isDryRun ? 'DRY RUN: ' : ''}Migrations processed successfully`)
} catch (error) {
  console.error(`${isDryRun ? 'DRY RUN: ' : ''}Migration failed:`, error.message)
  process.exit(1)
}
