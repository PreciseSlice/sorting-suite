import { expect } from 'chai';

import index from '../scripts/index';

const insertionSort = require('../scripts/insertionSort.js');

describe('insertionSort unit testing', () => {

    it('should sort a small array of numbers with insertionSort', () => {
        const numbers = [ 4, 2, 1, 3 ];

        expect( insertionSort(numbers) ).to.deep.equal( [ 1, 2, 3, 4 ] );
    });

}); 