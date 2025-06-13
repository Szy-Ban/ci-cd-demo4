// report-generator.js

const fs = require('fs');
const path = require('path');

// Pobieramy statusy poszczególnych etapów z env
const statuses = {
    Testy: process.env.JOB_TEST || 'unknown',
    Lint: process.env.JOB_LINT || 'unknown',
    Build: process.env.JOB_BUILD || 'unknown',
    Staging: process.env.JOB_STAGING || 'unknown',
    Production: process.env.JOB_PROD || 'unknown'
};

const branch = process.env.GITHUB_REF || 'unknown';
const timestamp = new Date().toISOString();

let content = `Branch: ${branch}\nCzas: ${timestamp}\n\n`;
for (const [name, status] of Object.entries(statuses)) {
    content += `${name.padEnd(11)}: ${status}\n`;
}

fs.writeFileSync(path.join(__dirname, 'report.txt'), content);
console.log('Report saved as report.txt:\n');
console.log(content);

//test