define(["require", "exports", 'lodash'], function (require, exports, lodash_1) {
    "use strict";
    var Wordscramble;
    (function (Wordscramble) {
        function scramble(victim) {
            if (lodash_1._.isArray(victim)) {
                return array(lodash_1._.map(victim, scramble));
            }
            else if (lodash_1._.isString(victim)) {
                return string(victim);
            }
            else if (lodash_1._.isBoolean(victim)) {
                return boolean(victim);
            }
            else if (lodash_1._.isNumber(victim)) {
                return number(victim);
            }
            else {
                return object(victim);
            }
        }
        Wordscramble.scramble = scramble;
        function string(str) {
            return array(lodash_1._.toString(str).split('')).join('');
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
            return lodash_1._.toNumber(string(lodash_1._.toString(num)));
        }
        Wordscramble.number = number;
        function object(obj) {
            return lodash_1._.mapValues(obj, scramble);
        }
        Wordscramble.object = object;
    })(Wordscramble = exports.Wordscramble || (exports.Wordscramble = {}));
});
