'use strict';

/**
 * Return a string scrambled randomly.
 *
 * @param {String} string
 * @returns {String} letters
 */

module.exports = function(string) {
    if (typeof string !== 'string') {
        throw new Error('Passed value must be a string!');
    }

    var letters = string.split(''),
        index = letters.length,
        temp = '',
        random = 0;

    while (--index > 0) {
        random = Math.floor(Math.random() * index);

        temp = letters[index];
        letters[index] = letters[random];
        letters[random] = temp;
    }

    return letters.join('');
}
