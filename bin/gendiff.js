#!/usr/bin/env node
const { program } = require('commander');

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  // .description('-h, --help', 'output usage information')
program.parse(process.argv)
console.log(program)