const fs = require('fs');
const path = require('path');

const status = process.env.PIPELINE_STATUS || 'unknown';
const branch = process.env.GITHUB_REF || 'unknown';
const timestamp = new Date().toISOString();

const content = `Status: ${status}\nBranch: ${branch}\nTime: ${timestamp}`;

fs.writeFileSync(path.join(__dirname, 'report.txt'), content);

console.log('Report saved as report.txt');

// testt