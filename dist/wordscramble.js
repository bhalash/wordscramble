"use strict";
var _ = require('lodash');
var ws;
(function (ws) {
    function scramble(victim) {
        if (_.isArray(victim)) {
            victim = array(_.map(victim, scramble));
        }
        else if (_.isString(victim)) {
            victim = string(victim);
        }
        else if (_.isBoolean(victim)) {
            victim = boolean(victim);
        }
        else if (_.isNumber(victim)) {
            victim = string(victim);
        }
        else {
            victim = object(victim);
        }
        return victim;
    }
    ws.scramble = scramble;
    function array(victim) {
        var index = victim.length, random = 0;
        while (--index > 0) {
            random = Math.floor(Math.random() * index);
            _a = [victim[random], victim[index]], victim[index] = _a[0], victim[random] = _a[1];
        }
        return victim;
        var _a;
    }
    ws.array = array;
    function boolean(victim) {
        return !victim;
    }
    ws.boolean = boolean;
    function number(victim) {
        return _.toNumber(string(_.toString(victim)));
    }
    ws.number = number;
    function object(victim) {
        return _.mapValues(victim, scramble);
    }
    ws.object = object;
    function string(victim) {
        return array(_.toString(victim).split('')).join('');
    }
    ws.string = string;
})(ws = exports.ws || (exports.ws = {}));
