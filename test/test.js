var scramble = require('./'),
    test = require('tape');

test('scramble', function(assert) {
    assert.plan(6);

    assert.equal(scramble('x'), 'x');
    assert.equal(scramble(true), false);
    assert.equal(scramble(false), true);
    assert.notEqual(scramble(['paul', 'chani']), ['paul', 'chani']);
    assert.notEqual(scramble({ harkonnens: ['vladimir', 'feyd'] }), { harkonnens: ['vladimir', 'feyd'] });
    assert.notEqual(scramble('I must not fear. Fear is the mind-killer'), 'I must not fear. Fear is the mind-killer');
});
