#!/usr/bin/env node
import { Command } from 'commander'
import { onCreate } from './commands/create'

const program = new Command()

program
  .command('create')
  .option('-t --type <type>', 'select create type')
  .description('create a views, or a route, or a pinia module')
  .action(onCreate)

program.parse(process.argv)
