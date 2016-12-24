const wordscramble = require('../');
const _ = require('lodash');
const tape = require('tape');
const range = require('range').range;

const samples = {
    array: range(1, 100),
    string: 'I must not fear. Fear is the mind-killer.',
    number: 10191,
    boolean: true,
    object: {
        harkonnens: ['vladimir', 'feyd'],
        corrino: ['Shaddam', 'Irulan'],
        choam: 'Combine Honnete Ober Advancer Mercantile',
        sandwormsRule: true,
        year: 10191
    }
};

/**
 * Wordscramble.scramble()
 */

tape('Wordscramble.scramble()', assert => {
    assert.plan(6);

    assert.equal(
        typeof wordscramble.scramble,
        'function',
        'Wordscramble.scramble() should be a function.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.string),
        samples.string,
        'Should return an equal value if one character is passed.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.boolean),
        samples.boolean,
        'Should invert a Boolean value.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.number),
        samples.number,
        'Should scramble the digits of a number.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.array),
        samples.array,
        'Should randomly and recursively scramble the values of an array.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.object),
        samples.object,
        'Should randomly and recursively scramble the values of an array.'
    );
});

/**
 * Wordscramble.string()
 */

tape('Wordscramble.string()', assert => {
    assert.plan(4);

    assert.equal(
        typeof wordscramble.string,
        'function',
        'Wordscramble.string() should be a function.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.string),
        samples.string,
        'Should randomly and recursively scramble the values of a string.'
    );

    assert.equal(
        samples.string.length,
        wordscramble.string(samples.string).length,
        'Should not consume or add characters to a string.'
    );

    assert.equal(
        _.isArray(samples.string),
        _.isArray(wordscramble.string(samples.string)),
        'Should return a string.'
    );
});

/**
 * Wordscramble.array()
 */

tape('Wordscramble.array()', assert => {
    assert.plan(4);

    assert.equal(
        typeof wordscramble.array,
        'function',
        'Wordscramble.array() should be a function.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.array),
        samples.array,
        'Should randomly and recursively scramble the values of an array.'
    );

    assert.equal(
        samples.array.length,
        wordscramble.array(samples.array).length,
        'Should not consume or add items to an array.'
    );

    assert.equal(
        _.isArray(samples.array),
        _.isArray(wordscramble.array(samples.array)),
        'Should return an array.'
    );
});

/**
 * Wordscramble.boolean()
 */

tape('Wordscramble.boolean()', assert => {
    assert.plan(3);

    assert.equal(
        typeof wordscramble.boolean,
        'function',
        'Wordscramble.boolean() should be a function.'
    );

    assert.equal(
        wordscramble.boolean(true),
        false,
        'Should invert a Boolean value.'
    );

    assert.equal(
        _.isBoolean(samples.boolean),
        _.isBoolean(wordscramble.boolean(samples.boolean)),
        'Should return a boolean.'
    );
});

/**
 * Wordscramble.number()
 */

// tape('Wordscramble.number()', assert => {
//     assert.plan(3);
//
//     assert.equal(
//         typeof wordscramble.number,
//         'function',
//         'Wordscramble.number() should be a function.'
//     );
//
//     assert.notEqual(
//         wordscramble.scramble(samples.number),
//         samples.number,
//         'Should scramble the digits of a number.'
//     );
//
//     assert.equal(
//         _.isNumber(samples.number),
//         _.isNumber(wordscramble.number(samples.number)),
//         'Should return a number.'
//     );
// });

/**
 * Wordscramble.object()
 */

tape('Wordscramble.object()', assert => {
    assert.plan(4);

    assert.equal(
        typeof wordscramble.object,
        'function',
        'Wordscramble.object() should be a function.'
    );

    assert.notEqual(
        wordscramble.scramble(samples.object),
        samples.object,
        'Should scramble values of an object.'
    );

    assert.deepEqual(
        Object.keys(samples.object),
        Object.keys(wordscramble.object(samples.object)),
        'Should not add to or remove from the keys of an object.'
    );

    assert.equal(
        _.isObject(samples.object),
        _.isObject(wordscramble.object(samples.object)),
        'Should return an object.'
    );
});
