const { generateTeamCard } = require('../src/teamRenderer');
const assert = require('assert');

// Test Case 1: Standard Name
console.log('Running Test Case 1: Standard Name...');
const res1 = generateTeamCard('Abdulrahman Ali', '202403424');
assert.ok(res1.includes('<div class="avatar" aria-hidden="true">AA</div>'), 'Initials AA not found');
assert.ok(res1.includes('<h4>Abdulrahman Ali</h4>'), 'Name Abdulrahman Ali not found');
assert.ok(res1.includes('<span>ID: 202403424</span>'), 'ID 202403424 not found');

// Test Case 2: Single Word Name
console.log('Running Test Case 2: Single Word Name...');
const res2 = generateTeamCard('Omar', '12345');
assert.ok(res2.includes('<div class="avatar" aria-hidden="true">O</div>'), 'Initial O not found');

// Test Case 3: Multiple Word Name
console.log('Running Test Case 3: Multiple Word Name...');
const res3 = generateTeamCard('Rawan Adel Ali', '202404167');
assert.ok(res3.includes('<div class="avatar" aria-hidden="true">RAA</div>'), 'Initials RAA not found');

// Test Case 4: Null Name
console.log('Running Test Case 4: Null Name...');
const res4 = generateTeamCard(null, '202404167');
assert.ok(res4.includes('<div class="avatar" aria-hidden="true">U</div>'), 'Initial U not found for null name');
assert.ok(res4.includes('<h4>Unknown</h4>'), 'Name Unknown not found for null name');

// Test Case 5: Unusual Spacing
console.log('Running Test Case 5: Unusual Spacing...');
const res5 = generateTeamCard('  Rawan   Adel  Ali  ', '202404167');
assert.ok(res5.includes('<div class="avatar" aria-hidden="true">RAA</div>'), 'Initials RAA not found for unusual spacing');

console.log('All tests passed successfully!');
