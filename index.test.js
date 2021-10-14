const mergeExclusive = require( './index' );

let test1a = [1, 2, 3, 4, 5];
let test1b = [5, 9, 6, 2];

let test2a = [2, 4, 6, 8];
let test2b = [0, 1, 3, 5, 9];

let test3a = [0, 2, 4, 6, 8, 10];
let test3b = [0, 2, 4, 6, 8, 10];

describe('arrayExclusive', () => {
  const expected = [1, 3, 4, 9, 6];
  it('return 3rd array with only exclusive values - test1', () => {
    expect(mergeExclusive(test1a, test1b)).toEqual(expect.arrayContaining(expected));
  } );
} );

describe('arrayExclusive', () => {
  const expected = [2, 4, 6, 8, 0, 1, 3, 5, 9];
  it('return 3rd array with the sum of all both arrays - test2', () => {
    expect(mergeExclusive(test2a, test2b)).toEqual(
     expect.arrayContaining(expected)
    );
  });
} );

describe('arrayExclusive', () => {
  const expected = [];
  it('return 3rd empty array with only exclusive values - test3', () => {
    expect(mergeExclusive(test3a, test3b)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
