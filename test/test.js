const wordscramble = require('../');
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
    assert.plan(3);
    const victims = samples;

    assert.equal(typeof wordscramble, 'object');
    assert.notEqual(wordscramble.scramble(victims), victims);
    assert.deepEquals(victims, samples);
});

/**
 * Wordscramble.string()
 */

tape('Wordscramble.string()', assert => {
    assert.plan(3);
    const victims = samples;

    assert.equal(typeof wordscramble.string, 'function');
    assert.notEqual(wordscramble.string(victims.string), victims.string);
    assert.deepEquals(victims.string, samples.string);
});

/**
 * Wordscramble.array()
 */

tape('Wordscramble.array()', assert => {
    assert.plan(3);
    const victims = samples;

    assert.equal(typeof wordscramble.array, 'function');
    assert.notEqual(wordscramble.array(victims.array), victims.array);
    assert.deepEquals(victims.array, samples.array);
});

/**
 * Wordscramble.boolean()
 */

tape('Wordscramble.boolean()', assert => {
    assert.plan(3);
    const victims = samples;

    assert.equal(typeof wordscramble.boolean, 'function');
    assert.notEqual(wordscramble.boolean(victims.boolean), victims.boolean);
    assert.deepEquals(victims.boolean, samples.boolean);
});

/**
 * Wordscramble.number()
 */

tape('Wordscramble.number()', assert => {
    assert.plan(3);
    const victims = samples;

    assert.equal(typeof wordscramble.number, 'function');
    assert.notEqual(wordscramble.number(victims.number), victims.number);
    assert.deepEquals(victims.number, samples.number);
});

/**
 * Wordscramble.object()
 */

tape('Wordscramble.object()', assert => {
    assert.plan(3);
    const victims = samples;

    assert.equal(typeof wordscramble.object, 'function');
    assert.notEqual(wordscramble.object(victims.object), victims.object);
    assert.deepEquals(victims.object, samples.object);
});
