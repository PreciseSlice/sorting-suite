import { expect } from 'chai';

import index from '../scripts/index';

// const mergeSort = require('../scripts/mergeSort.js');

describe('mergeSort unit testing', () => {

  it.skip('should sort a small array of numbers with insertionSort', () => {
    const numbers = [ 5, 3, 8, 1 ];

    expect( insertionSort(numbers) ).to.deep.equal( [ 1, 3, 5, 8 ] );
  });

}); 