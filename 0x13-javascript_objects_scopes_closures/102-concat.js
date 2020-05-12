#!/usr/bin/node

const fs = require('fs');

const fA = process.argv[2];
const fB = process.argv[3];
const fC = process.argv[4];

const A = fs.readFileSync(fA, 'utf8');
const B = fs.readFileSync(fB, 'utf8');
fs.writeFileSync(fC, A + B);
