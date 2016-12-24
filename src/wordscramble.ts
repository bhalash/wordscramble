import * as _ from 'lodash';

export namespace Wordscramble {
    /**
     * Scramble a variable of any type.
     *
     * @param {any} - A variable of any type, unscrambled.
     * @returns {any} - A variable of any type, scrambled.
     */

    export function scramble(victim:any):any {
        if (_.isArray(victim)) {
            /* Recurively walk, and scramble, each value in an array, then
             * scramble the order of the elements. */
            return array(_.map(victim, scramble));
        } else if (_.isString(victim)) {
            return string(victim);
        } else if (_.isBoolean(victim)) {
            return boolean(victim);
        } else if (_.isNumber(victim)) {
            return number(victim);
        } else {
            return object(victim);
        }
    }

    /**
     * Scramble a string value by rearranging the order of the characters.
     *
     * This is functionally identical to Wordscramble.number().
     *
     * @param {string} str
     * @returns {string} str
     */

    export function string(str:string):string {
        return array(_.toString(str).split('')).join('');
    }

    /**
     * Scramble the order of elements in an array.
     *
     * Strings (and numbers cast as strings) are passed to this function to be
     * scrambled.
     *
     * @param {any[]} arr - Array, unscrambled.
     * @returns {any[]} arr - Array, scrambled.
     */

    export function array(arr:any[]):any[] {
        if (!arr.length) {
            return arr;
        }

        const random = Math.floor(Math.random() * arr.length);
        [arr[0], arr[random]] = [arr[random], arr[0]];

        return [
            arr[0],
            ...array(arr.slice(1))
        ]
    }

    /**
     * Scramble a Boolean value by, like, flipping it.
     *
     * @param {boolean} bool
     * @returns {boolean} bool
     */

    export function boolean(bool:boolean):boolean {
        return !bool;
    }

    /**
     * Scramble a numerical value by rearranging the order of the digits.
     *
     * This is functionally identical to Wordscramble.string().
     *
     * @param {number} num
     * @returns {number} num
     */

    export function number(num:number):number {
        return _.toNumber(string(_.toString(num)));
    }

    /**
     * Recursively walk an object in order to scramble all values.
     *
     * @param {object} obj
     * @returns {object} obj
     */

    export function object(obj:any):any {
        return _.mapValues(obj, scramble);
    }
}
