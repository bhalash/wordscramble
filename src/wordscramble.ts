// import * as _ from 'lodash';
import 'lodash';

export class Wordscramble {
    constructor(victim:any) {
        return this.scramble(victim);
    }

    /**
     * Scramble a variable of any type.
     *
     * @param {any} - A variable of any type, unscrambled.
     * @returns {any} - A variable of any type, scrambled.
     */

    scramble(victim:any):any {
        if (_.isArray(victim)) {
            /* Recurively walk, and scramble, each value in an array, then
             * scramble the order of the elements. */
            victim = this.array(_.map(victim, this.scramble));
        } else if (_.isBoolean(victim)) {
            victim = this.boolean(victim);
        } else if (_.isString(victim)) {
            victim = this.string(victim);
        } else if (_.isNumber(victim)) {
            victim = this.string(victim);
        } else {
            victim = this.object(victim);
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

    array(victim:any[]):any[] {
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

    boolean(victim:boolean):boolean {
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

    number(victim:number):number {
        return _.toNumber(this.string(_.toString(victim)));
    }

    /**
     * Recursively walk an object in order to scramble all values.
     *
     * @param {object} victim - Number, unscrambled.
     * @returns {object} victim - Number, scrambled.
     */

    object(victim:any):any {
        return _.mapValues(victim, this.scramble);
    }

    /**
     * Scramble a string value by rearranging the order of the characters.
     *
     * This is functionally identical to Wordscramble.number().
     *
     * @param {string} victim - String, unscrambled.
     * @returns {string} victim - String, scrambled.
     */

    string(victim:string):string {
        return this.array(_.toString(victim).split('')).join('');
    }
}
