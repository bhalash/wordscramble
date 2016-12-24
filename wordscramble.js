'use strict';

/**
 * Random crap scrambler.
 */

const Wordscramble = function() {};

/**
 * Return a random value up to max.
 *
 * @private
 * @param {number} max - Maximum value.
 * @returns {number} - Random number.
 */

function random(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Crude variable type detection.
 *
 * @private
 * @param {*} victim - Victim to identify.
 * @return {string} - Victim type.
 */

function type(victim) {
    if (Array.isArray(victim)) {
        return 'array';
    } else {
        return typeof victim;
    }
}

/**
 * Scramble a variable of any type.
 *
 * @public
 * @param {any} - A variable of any type, unscrambled.
 * @returns {any} - A variable of any type, scrambled.
 */

Wordscramble.prototype.scramble = function(victim) {
    switch (type(victim)) {
    case 'array':
        /* Recurively walk, and scramble, each value in an array, then
         * scramble the order of the elements. .call() is used to preserve
         * context. */
        return this.array(victim.map(element => this.scramble.call(this, element)));
    case 'function':
        return victim;
    default:
        return this[type(victim)](victim);
    }
};

/**
 * Scramble a string value by rearranging the order of the characters.
 *
 * This is functionally identical to Wordscramble.number().
 *
 * @public
 * @param {string} string
 * @returns {string} string
 */

Wordscramble.prototype.string = function(string) {
    return this.array(String(string).split('')).join('');
};

/**
 * Scramble the order of elements in an array.
 *
 * Strings (and numbers cast as strings) are passed to this function to be
 * scrambled.
 *
 * @public
 * @param {array} collection - Unscrambled array.
 * @returns {array} collection - Scrambled array.
 */

Wordscramble.prototype.array = function(array) {
    if (!array.length) {
        return array;
    }

    let rand = random(array.length);
    let copy = array.slice();

    [copy[0], copy[rand]] = [copy[rand], copy[0]];
    return [copy[0], ...this.array(copy.slice(1))];
};

/**
 * Scramble a Boolean value by, like, flipping it.
 *
 * @param {boolean} boolean
 * @returns {boolean} boolean
 */

Wordscramble.prototype.boolean = function(boolean) {
    return !boolean;
};

/**
 * Scramble a numerical value by rearranging the order of the digits.
 *
 * This is functionally identical to Wordscramble.string().
 *
 * @public
 * @param {number} number
 * @returns {number} number
 */

Wordscramble.prototype.number = function(number) {
    return Number(this.string(number));
};

/**
 * Recursively walk an object in order to scramble all values.
 *
 * @public
 * @param {object} object
 * @returns {object} object
 */

Wordscramble.prototype.object = function(object) {
    let copy = object;

    Object.keys(copy).forEach(key => {
        copy[key] = this.scramble(copy[key]);
    });

    return copy;
};

module.exports = Object.create(Wordscramble.prototype);
