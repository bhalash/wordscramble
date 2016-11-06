"use strict";
var _ = require('lodash');
var Wordscramble;
(function (Wordscramble) {
    function scramble(victim) {
        if (_.isArray(victim)) {
            return array(_.map(victim, scramble));
        }
        else if (_.isString(victim)) {
            return string(victim);
        }
        else if (_.isBoolean(victim)) {
            return boolean(victim);
        }
        else if (_.isNumber(victim)) {
            return number(victim);
        }
        else {
            return object(victim);
        }
    }
    Wordscramble.scramble = scramble;
    function string(str) {
        return array(_.toString(str).split('')).join('');
    }
    Wordscramble.string = string;
    function array(arr) {
        if (!arr.length) {
            return arr;
        }
        var random = Math.floor(Math.random() * arr.length);
        _a = [arr[random], arr[0]], arr[0] = _a[0], arr[random] = _a[1];
        return [arr[0]].concat(array(arr.slice(1)));
        var _a;
    }
    Wordscramble.array = array;
    function boolean(bool) {
        return !bool;
    }
    Wordscramble.boolean = boolean;
    function number(num) {
        return _.toNumber(string(_.toString(num)));
    }
    Wordscramble.number = number;
    function object(obj) {
        return _.mapValues(obj, scramble);
    }
    Wordscramble.object = object;
})(Wordscramble = exports.Wordscramble || (exports.Wordscramble = {}));
