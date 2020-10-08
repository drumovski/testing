
function calculateSum(flattenedArray) {
	// Set a default value to help prevent errors:
	let total = 0;

	// Convert our varying-amount of arguments into a single array.
    // Note that "arguments" is a special almost-Array object built into all JS functions.
	// Note that we use "new Array(null, ...arguments)" instead of "new Array(...arguments)"
	// This is because if you did something like "calculateSum(10)" without using null,
	// the array constructor treats the number as a desired length for the array rather than a value to put in the array.
	// let tempArgs = new Array(null, ...arguments);

	// In newer JS versions (and in browsers), we can just say 
	// let flattenedArray = tempArgs.flat(Infinity)
	// But I (Alex H) am writing in Node 10. It doesn't have that. 
	// We can write this helper function though:
	const flatten = function (arr, result = []) {
		for (let i = 0, length = arr.length; i < length; i++) {
			const value = arr[i];
			if (Array.isArray(value)) {
				flatten(value, result); // Note the recursion for multi-level arrays of unknown & varying depth.
			} else {
				result.push(value);
			}
		}
		return result;
	};
	// And then call our helper here:
	// let flattenedArray = flatten(tempArgs);

	// Use Array.prototype.reduce() to calculate our sum.
	total = flattenedArray.reduce((subTotal, nextNum) => {
		return subTotal += nextNum;
	})

	return total;
	// Note that literally only the "reduce" part is about building the sum?
	// Everything else is about making sure our inputs are going to work!
}


module.exports = {
    calculateSum
}