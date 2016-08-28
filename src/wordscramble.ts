import * as _ from 'lodash';

export namespace ws {
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
            victim = array(_.map(victim, scramble));
        } else if (_.isString(victim)) {
            victim = string(victim);
        } else if (_.isBoolean(victim)) {
            victim = boolean(victim);
        } else if (_.isNumber(victim)) {
            victim = string(victim);
        } else {
            victim = object(victim);
        }

        return victim;
    }

    /**
     * Scramble the order of elements in an array.
     *
     * Strings (and numbers cast as strings) are passed to this function to be
     * scrambled.
     *
     * @param {any[]} victim - Array, unscrambled.
     * @returns {any[]} victim - Array, scrambled.
     */

    export function array(victim:any[]):any[] {
        var index:number = victim.length,
            random:number = 0;

        while (--index > 0) {
            random = Math.floor(Math.random() * index);
            [victim[index], victim[random]] = [victim[random], victim[index]];
        }

        return victim;
    }

    /**
     * Scramble a Boolean value by, like, flipping it.
     *
     * @param {boolean} victim - Boolean, unscrambled.
     * @returns {boolean} victim - Boolean, scrambled.
     */

    export function boolean(victim:boolean):boolean {
        return !victim;
    }

    /**
     * Scramble a numerical value by rearranging the order of the digits.
     *
     * This is functionally identical to Wordscramble.string().
     *
     * @param {number} victim - Number, unscrambled.
     * @returns {number} victim - Number, scrambled.
     */

    export function number(victim:number):number {
        return _.toNumber(string(_.toString(victim)));
    }

    /**
     * Recursively walk an object in order to scramble all values.
     *
     * @param {object} victim - Number, unscrambled.
     * @returns {object} victim - Number, scrambled.
     */

    export function object(victim:any):any {
        return _.mapValues(victim, scramble);
    }

    /**
     * Scramble a string value by rearranging the order of the characters.
     *
     * This is functionally identical to Wordscramble.number().
     *
     * @param {string} victim - String, unscrambled.
     * @returns {string} victim - String, scrambled.
     */

    export function string(victim:string):string {
        return array(_.toString(victim).split('')).join('');
    }
}
