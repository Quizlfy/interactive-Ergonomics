const { generateTeamCard } = require('../src/teamRenderer');
const assert = require('assert');

// Test Case 1: Standard Name
console.log('Running Test Case 1: Standard Name...');
const res1 = generateTeamCard('Abdulrahman Ali', '202403424');
assert.ok(res1.includes('<div class="avatar">AA</div>'), 'Initials AA not found');
assert.ok(res1.includes('<h4>Abdulrahman Ali</h4>'), 'Name Abdulrahman Ali not found');
assert.ok(res1.includes('<span>ID: 202403424</span>'), 'ID 202403424 not found');

// Test Case 2: Single Word Name
console.log('Running Test Case 2: Single Word Name...');
const res2 = generateTeamCard('Omar', '12345');
assert.ok(res2.includes('<div class="avatar">O</div>'), 'Initial O not found');

// Test Case 3: Multiple Word Name
console.log('Running Test Case 3: Multiple Word Name...');
const res3 = generateTeamCard('Rawan Adel Ali', '202404167');
assert.ok(res3.includes('<div class="avatar">RAA</div>'), 'Initials RAA not found');

console.log('All tests passed successfully!');
