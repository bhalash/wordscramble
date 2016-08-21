"use strict";
var _ = require('lodash');
var Wordscramble = (function () {
    function Wordscramble(victim) {
        return this.scramble(victim);
    }
    Wordscramble.prototype.scramble = function (victim) {
        if (_.isArray(victim)) {
            victim = this.array(_.map(victim, this.scramble));
        }
        else if (_.isBoolean(victim)) {
            victim = this.boolean(victim);
        }
        else if (_.isString(victim)) {
            victim = this.string(victim);
        }
        else if (_.isNumber(victim)) {
            victim = this.string(victim);
        }
        else {
            victim = this.object(victim);
        }
        return victim;
    };
    Wordscramble.prototype.array = function (victim) {
        var index = victim.length, random = 0;
        while (--index > 0) {
            random = Math.floor(Math.random() * index);
            _a = [victim[random], victim[index]], victim[index] = _a[0], victim[random] = _a[1];
        }
        return victim;
        var _a;
    };
    Wordscramble.prototype.boolean = function (victim) {
        return !victim;
    };
    Wordscramble.prototype.number = function (victim) {
        return _.toNumber(this.string(victim));
    };
    Wordscramble.prototype.object = function (victim) {
        return _.mapValues(victim, this.scramble);
    };
    Wordscramble.prototype.string = function (victim) {
        return this.array(_.toString(victim).split('')).join('');
    };
    return Wordscramble;
}());
exports.Wordscramble = Wordscramble;
