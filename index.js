/*
Create a function that will receive two arrays of numbers as arguments and return an
array composed of all the numbers that are either in the first array or second
array but not in both.
For example:
var ar1 = [1, 2, 3, 4, 5];
var ar2 = [5, 9, 6, 2];
var ar3 = mergeExclusive(ar1, ar2);

ar3 should be equal to = [1, 3, 4, 9, 6]
*/
let ar1 = [1, 2, 3, 4, 5];
let ar2 = [5, 9, 6, 2];

function mergeExclusive ( array1, array2 ) {
  let exclusiveA = array1.filter( index => !array2.some( index2 => index === index2 ) );
  let exclusiveB = array2.filter( index => !array1.some( index2 => index === index2 ) );
  let result = exclusiveA.concat(exclusiveB)
  console.log( result );
  return result
}

mergeExclusive(ar1, ar2)

module.exports = mergeExclusive;
