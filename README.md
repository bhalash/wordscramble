![](/banner.png)

# Wordscramble
Wordscramble is a completely pointless and functionally-programmed Node package which you shouldn't install. The *only* thing Wordscramble does is scramble JavaScript object values. This is an [is-thirteen](https://github.com/jezen/is-thirteen) level of uselessness, although _I_ can boast that _my_ functions are artisanal; they're both pure and free of side-effects.

On the other hand, Wordscramble is reasonably robust against whatever random crap you throw at it, and it does some cool stuff with recursion to get the job done.

## Badges
Look at all the shiny badges! Badges mean quality and Wordscramble has *four* quality. Look at them! **Look at them!** :)

[![Build Status](https://travis-ci.org/bhalash/wordscramble.svg?branch=master)](https://travis-ci.org/bhalash/wordscramble)
[![Dependency Status](https://david-dm.org/bhalash/wordscramble.svg)](https://david-dm.org/bhalash/wordscramble)
[![devDependency Status](https://david-dm.org/bhalash/wordscramble/dev-status.svg)](https://david-dm.org/bhalash/wordscramble#info=devDependencies)
[![npm version](https://badge.fury.io/js/wordscramble.svg)](https://badge.fury.io/js/wordscramble)

## Installation

    npm install wordscramble

## Usage
`wordscramble.scramble()` will attempt to guess the appropriate scramble function for a given variable:

    const wordscramble = require('wordscramble');

    wordscramble.scramble(true); // false
    wordscramble.scramble(0.123131231); // 11.32233110
    wordscramble.scramble('heighliner'); // glhenehrii
    wordscramble.scramble({atreides: 'Caladan', corinno: 'Kaitain'}); //{ atreides: 'ladnaCa', corinno: 'anaiKit' }
    wordscramble.scramble(['Atreides', 'Harkonnen', 'Corrino', 'Ginaz']); // [ 'oeannHnkr', 'znaGi', 'estrAedi', 'roirnoC' ]

Scramble methods for a given type may be accessed directly:

    wordscramble.array(['Paul Atreides', 'Alia Atreides', 'Leto Atreides']); // [ 'Alia Atreides', 'Leto Atreides', 'Paul Atreides' ]
    wordscramble.bool(true); // false
    wordscramble.number(10191); // 90111
    wordscramble.object({ spice: 'essential', fremen: 'scary', shaihulud: 'literally god' }); { spice: 'ineslstea', fremen: 'arcys', shaihulud: 'yaol gltrdlei' }
    wordscramble.string('bene gesserit'); // 'ietrbens seeg'

Wordscramle returns a scrambled copy of passed data. Original values are _never_ mutated:

    > const atreides = { dueke: 'Leto', heir: 'Paul' }
    undefined
    > wordscramble.object(atreides)
    { dueke: 'oetL', heir: 'Pual' }
    > atreides
    { dueke: 'Leto', heir: 'Paul' }

### Testing

    npm test/test

## Contributing
Go wild! All pull requests are welcome.

## License
Copyright (c) 2016 [Mark Grealish][10]. See [LICENSE](LICENSE) for details.

## FAQ

##### Why?
[Teeling Single Malt](http://www.celticwhiskeyshop.com/teeling-single-malt-).

##### Okay...
Yeah, look. Like, it was my birthday this weekend and I was gifted a bottle of whiskey. First I drank the whiskey and then I wrote this.

##### What's with all the *Dune* references?
I'm an unashamed fan for all things [_Dune_](https://en.wikipedia.org/wiki/Dune_(novel)) and Frank Herbert.
