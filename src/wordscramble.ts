import * as _ from 'lodash';

export class Wordscramble {
    shuffle(victim:any):any {
        if (_.isArray(victim)) {
            victim = this.array(_.map(victim, this.shuffle));
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

    array(victim:any[]):any[] {
        var index:number = victim.length,
            random:number = 0;

        while (--index > 0) {
            random = Math.floor(Math.random() * index);
            [victim[index], victim[random]] = [victim[random], victim[index]];
        }

        return victim;
    }

    boolean(victim:boolean):boolean {
        return !victim;
    }

    number(victim:number):number {
        return _.toNumber(this.string(victim));
    }

    object(victim:any):any {
        return _.mapValues(victim, this.shuffle);
    }

    string(victim:string):string {
        return this.array(_.toString(victim).split('')).join('');
    }
}
