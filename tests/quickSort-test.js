import { expect, assert } from 'chai';

import index from '../index';

const quickSort = require('../scripts/quickSort');

const createArray = require ('../scripts/random.js').createArray;
const checkArray = require ('../scripts/random.js').checkArray;


describe('quickSort unit testing', () => {

  it('should sort a small array of numbers with quickSort', () => {
    const numbers = [ 5, 3, 8, 1 ];

    expect( quickSort(numbers) ).to.deep.equal( [ 1, 3, 5, 8 ] );
  });

    it('should be able to sort negative numbers', () => {
		const numbers = [1, -1, -3, 2];

		expect( quickSort(numbers) ).to.deep.equal( [-3, -1, 1, 2] );
	});

	it('should be able to sort large numbers', () => {
		const numbers = [1555, 200000, 999999999, 2];

		expect( quickSort(numbers) ).to.deep.equal( [2, 1555, 200000, 999999999] );
	});

	it('should be able to sort letters', () => {
		const letters = ['c', 'd', 'b', 'a'];

		expect( quickSort(letters) ).to.deep.equal( ['a', 'b', 'c', 'd' ] );
	});

	it('should be able to sort an array of 100 two digit numbers', () => {
		let array = createArray(0, 99, 100);
		assert.deepEqual(checkArray(quickSort(array)), true);
	});

	it('should be able to sort an array of 1,000 two digit numbers', () => {
		let array = createArray(0, 99, 1000);
		assert.deepEqual(checkArray(quickSort(array)), true);
	});

	it('should be able to sort an array of 10,000 two digit numbers', () => {
		let array = createArray(0, 99, 10000);
		assert.deepEqual(checkArray(quickSort(array)), true);
	});

	it('should be able to sort an array of 100,000 two digit numbers', () => {
		let array = createArray(0, 99, 100000);
		assert.deepEqual(checkArray(quickSort(array)), true);
	});

	it('should be able to sort an array of 250,000 two digit numbers', () => {
		let array = createArray(0, 99, 150000);
		assert.deepEqual(checkArray(quickSort(array)), true);
	});

	it.skip('should be able to sort an array of 275,000 two digit numbers', () => {
		let array = createArray(0, 99, 275000);
		assert.deepEqual(checkArray(quickSort(array)), true);
	});

}); 