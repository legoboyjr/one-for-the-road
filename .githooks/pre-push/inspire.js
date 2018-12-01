#!/usr/bin/env node

const iquotes = require('iquotes');
const chalk = require('chalk');

const { quote, author }= iquotes.random();

const message = `
${chalk.yellow.bold(quote)}
    ${chalk.blue.bold(`- ${author}`)}
`;

console.log(message);
