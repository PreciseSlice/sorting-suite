import { expect } from 'chai';

import index from '../scripts/index';

const mergeSort = require('../scripts/mergeSort.js');


describe('mergeSort unit testing', () => {

  it('should sort a small array of numbers with insertionSort', () => {
    const numbers = [ 5, 3, 8, 1 ];

    expect( mergeSort(numbers) ).to.deep.equal( [ 1, 3, 5, 8 ] );
  });

  it('should be able to sort negative numbers', () => {
		const numbers = [1, -1, -3, 2];

		expect( mergeSort(numbers) ).to.deep.equal( [-3, -1, 1, 2] );
	});

	it('should be able to sort large numbers', () => {
		const numbers = [1555, 200000, 999999999, 2];

		expect( mergeSort(numbers) ).to.deep.equal( [2, 1555, 200000, 999999999] );
	});

	it('should be able to sort letters', () => {
		const letters = ['c', 'd', 'b', 'a'];

		expect( mergeSort(letters) ).to.deep.equal( ['a', 'b', 'c', 'd' ] );
	});

}); 