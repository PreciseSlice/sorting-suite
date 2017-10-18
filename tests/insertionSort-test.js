import { expect } from 'chai';

import index from '../scripts/index';

const insertionSort = require('../scripts/insertionSort.js');

describe('insertionSort unit testing', () => {

  it('should sort a small array of numbers with insertionSort', () => {
    const numbers = [ 4, 2, 1, 3 ];

    expect( insertionSort(numbers) ).to.deep.equal( [ 1, 2, 3, 4 ] );
  });

  it('should be able to sort negative numbers', () => {
		const numbers = [1, -1, -3, 2];

		expect( insertionSort(numbers) ).to.deep.equal( [-3, -1, 1, 2] );
	});

	it('should be able to sort large numbers', () => {
		const numbers = [1555, 200000, 999999999, 2];

		expect( insertionSort(numbers) ).to.deep.equal( [2, 1555, 200000, 999999999] );
	});

	it('should be able to sort letters', () => {
		const letters = ['c', 'd', 'b', 'a'];

		expect( insertionSort(letters) ).to.deep.equal( ['a', 'b', 'c', 'd' ] );
	});

}); 