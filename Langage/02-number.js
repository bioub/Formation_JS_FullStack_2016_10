// Infinity
console.log(10 / 0); // Infinity
console.log(typeof (10 / 0)); // number
console.log(isFinite(10 / 0)); // false
console.log(Number.isFinite(10 / 0)); // false (ES6)

// NaN (Not a Number)
console.log(Math.sqrt(-1)); // NaN
console.log(Number('abc')); // NaN
console.log(typeof Math.sqrt(-1)); // number
console.log(isNaN(Math.sqrt(-1))); // true
console.log(Number.isNaN(Math.sqrt(-1))); // true (ES6)