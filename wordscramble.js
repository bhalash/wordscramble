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
 * TODO: More comprehensive type checking.
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
    const victimType = type(victim);

    switch (victimType) {
    case 'function': return victim;
    default: return this[victimType](victim);
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
 * @returns {array} collection - Recursively scrambled array.
 */

Wordscramble.prototype.array = function(array) {
    if (array.length < 2) {
        return array;
    }

    let copy = array.slice(),
        index = copy.length,
        rand = random(index),
        temp;

    while (--index > 0) {
        temp = copy[index];
        copy[index] = copy[rand];
        copy[rand] = temp;
        rand = random(index);
    }

    return copy.map(this.scramble, this);
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
    let copy = Object.assign({}, object);
    Object.keys(copy).forEach(key => copy[key] = this.scramble(copy[key]));
    return copy;
};

module.exports = Object.create(Wordscramble.prototype);
