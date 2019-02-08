#!/usr/bin/env node

import cli from 'commander'
import { extractApply } from './audio'

cli
  .version('0.0.1')
  .description('Extract and apply file data')
  .option('-p, --path [value]', 'Path to folder', './')
  .action(data => extractApply(data.path))
  .parse(process.argv)
