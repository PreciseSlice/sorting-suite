import { expect, assert } from 'chai';

import index from '../scripts/index';

const createArray = require ('../scripts/random.js').createArray;
const checkArray = require ('../scripts/random.js').checkArray;

const bubbleSort = require ('../scripts/bubbleSort.js');

describe('bubbleSort unit testing', () => {
	
	it('should sort a small array of numbers with bubbleSort', () => {
		const numbers = [4, 3, 2, 1];
	
		expect( bubbleSort(numbers) ).to.deep.equal( [1, 2, 3, 4] );
	});

	it('should be able to sort negative numbers', () => {
		const numbers = [1, -1, -3, 2];

		expect( bubbleSort(numbers) ).to.deep.equal( [-3, -1, 1, 2] );
	});

	it('should be able to sort large numbers', () => {
		const numbers = [1555, 200000, 999999999, 2];

		expect( bubbleSort(numbers) ).to.deep.equal( [2, 1555, 200000, 999999999] );
	});

	it('should be able to sort letters', () => {
		const letters = ['c', 'd', 'b', 'a'];

		expect( bubbleSort(letters) ).to.deep.equal( ['a', 'b', 'c', 'd' ] );
	});

	it('should be able to sort an array of 100 numbers', () => {
		let array = createArray(0, 99, 100);
		assert.deepEqual(checkArray(bubbleSort(array)), true);
	});

	it('should be able to sort an array of 1,000 numbers', () => {
		let array = createArray(0, 99, 1000);
		assert.deepEqual(checkArray(bubbleSort(array)), true);
	});

	it('should be able to sort an array of 10,000 numbers', () => {
		let array = createArray(0, 99, 10000);
		assert.deepEqual(checkArray(bubbleSort(array)), true);
	});

	it.skip('should be able to sort an array of 20,000 numbers', () => {
		let array = createArray(0, 99, 20000);
		assert.deepEqual(checkArray(bubbleSort(array)), true);
	});

});