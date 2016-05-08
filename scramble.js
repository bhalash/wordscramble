'use strict';
var scramble = {};

/**
 * Generically scramble a JavaScript object.
 * Float and integer value are treated as strings.
 *
 * @param {object} victim - A pristine, innocent JavaScript value.
 * @returns {object} victim - A molested, scrambled JavaScript value.
 */

scramble.shuffle = function(victim) {
    if (Array.isArray(victim)) {
        victim = scramble.array.call(null, victim.map(scramble.shuffle));
    } else if (typeof(victim) === 'object') {
        victim = scramble.object(victim);
    } else if (typeof(victim) === 'boolean') {
        victim = scramble.bool(victim);
    } else {
        victim = scramble.string(victim);
    }

    return victim;
}

/**
 * Scramble the order of elements in an array.
 *
 * @param {array} victim
 * @returns {array} victim
 */

scramble.array = function(victim) {
    var index = victim.length,
        random = 0,
        temp = '';

    while (--index > 0) {
        random = Math.floor(Math.random() * index);

        temp = victim[index];
        victim[index] = victim[random];
        victim[random] = temp;
    }

    return victim;
}

/**
 * Scramble a string/number.
 *
 * @param {string | number} victim
 * @returns {string | number} victim
 */

scramble.string = function(victim) {
    return scramble.array.call(null, String(victim).split('')).join('');
}

/**
 * Scramble a boolean.
 *
 * @param {bool} victim
 * @returns {bool} victim
 */

scramble.bool = function(victim) {
    return !victim;
}

/**
 * Scramble an object.
 *
 * @param {object} victim
 * @returns {object} victim
 */

scramble.object = function(victim) {
    Object.keys(victim).forEach(key => {
        victim[key] = scramble.shuffle(victim[key]);
    });

    return victim;
}

module.exports = scramble.shuffle;
