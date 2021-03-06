import { expect, assert } from 'chai';

import index from '../index';

const createArray = require ('../scripts/random.js').createArray;
const checkArray = require ('../scripts/random.js').checkArray;

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

	it('should be able to sort an array of 100 two digit numbers', () => {
		let array = createArray(0, 99, 100);
		assert.deepEqual(checkArray(insertionSort(array)), true);
	});

	it('should be able to sort an array of 1,000 two digit numbers', () => {
		let array = createArray(0, 99, 1000);
		assert.deepEqual(checkArray(insertionSort(array)), true);
	});	

	it('should be able to sort an array of 10,000 two digit numbers', () => {
		let array = createArray(0, 99, 10000);
		assert.deepEqual(checkArray(insertionSort(array)), true);
	});

	it('should be able to sort an array of 25,000 two digit numbers', () => {
		let array = createArray(0, 99, 25000);
		assert.deepEqual(checkArray(insertionSort(array)), true);
	});

	it.skip('should be able to sort an array of 30,000 two digit numbers', () => {
		let array = createArray(0, 99, 30000);
		assert.deepEqual(checkArray(insertionSort(array)), true);
	});

}); 