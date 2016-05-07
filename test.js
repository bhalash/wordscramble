var scramble = require('./'),
    test = require('tape');

test('scramble', function(assert) {
    assert.plan(2);
    assert.equal(scramble('x'), 'x');
    assert.notEqual(scramble('I must not fear. Fear is the mind-killer'), 'I must not fear. Fear is the mind-killer');
});
