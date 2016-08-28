var ws = require('../dist').ws;
    test = require('tape');

test('Wordscramble', function(assert) {
    assert.plan(6);

    assert.equal(ws.scramble('x'), 'x');
    assert.equal(ws.scramble(true), false);
    assert.equal(ws.scramble(false), true);
    assert.notEqual(ws.scramble(['paul', 'chani']), ['paul', 'chani']);
    assert.notEqual(ws.scramble({ harkonnens: ['vladimir', 'feyd'] }), { harkonnens: ['vladimir', 'feyd'] });
    assert.notEqual(ws.scramble('I must not fear. Fear is the mind-killer'), 'I must not fear. Fear is the mind-killer');
});
