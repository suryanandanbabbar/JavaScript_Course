/* 
for ([initialExpression]; [conditionalExpression]; [incrementExpression])
    statement;
- In initialExpression, we cannot use 'const', use 'let'
*/

// for (let i = 0; i <= 10; i++) {
// 	if (i === 7) {
// 		console.log('7 is my lucky number');
// 	} else {
// 		console.log('Number ' + i);
// 	}
// }

// Nested Loops
// for (let i = 1; i <= 10; i++) {
// 	console.log('Number ' + i);

// 	for (let j = 1; j <= 10; j++) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 	}
// }

// Loop Through an array
const names = ['R', 'S', 'S', 'B'];

for (let i = 0; i < names.length; i++) {
	if (i === 3) {
		console.log(names[i] + ' is the best');
	} else {
		console.log(names[i]);
	}
}
