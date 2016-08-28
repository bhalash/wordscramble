![](/banner.png)

# Wordscramble
Wordscramble is a completely pointless and functionally-programmed Node package which you shouldn't install. The *only* thing Wordscramble does is scramble JavaScript object values. This is an [is-thirteen](https://github.com/jezen/is-thirteen) level of uselessness, although _I_ can boast that _my_ functions are artisanal; they're both pure and free of side-effects.

On the other hand, Wordscramble is reasonably robust against whatever random crap you throw at it, and it does some cool stuff with recursion to get the job done.

## Badges
Look at all the shiny badges! Badges mean quality and Wordscramble has *six* quality. Look at them! **Look at them!** :)

[![Build Status](https://travis-ci.org/bhalash/wordscramble.svg?branch=master)](https://travis-ci.org/bhalash/wordscramble)
[![Dependency Status](https://david-dm.org/bhalash/wordscramble.svg)](https://david-dm.org/bhalash/wordscramble)
[![devDependency Status](https://david-dm.org/bhalash/wordscramble/dev-status.svg)](https://david-dm.org/bhalash/wordscramble#info=devDependencies)
[![npm version](https://badge.fury.io/js/wordscramble.svg)](https://badge.fury.io/js/wordscramble)

[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)

## Installation

    npm install wordscramble

## Usage

    var ws = require('wordscramble').ws;
    ws.scramble(true); // false
    ws.scramble(0.123131231); // 11.32233110
    ws.scramble('heighliner'); // glhenehrii
    ws.scramble({atreides: 'Caladan', corinno: 'Kaitain'}); //{ atreides: 'ladnaCa', corinno: 'anaiKit' }
    ws.scramble(['Atreides', 'Harkonnen', 'Corrino', 'Ginaz']); // [ 'oeannHnkr', 'znaGi', 'estrAedi', 'roirnoC' ]

    ws.array(['Paul Atreides', 'Alia Atreides', 'Leto Atreides']); // [ 'Alia Atreides', 'Leto Atreides', 'Paul Atreides' ]
    ws.bool(true); // false
    ws.number(10191); // 90111
    ws.object({ spice: 'essential', fremen: 'scary', shaihulud: 'literally god' }); { spice: 'ineslstea', fremen: 'arcys', shaihulud: 'yaol gltrdlei' }
    ws.string('bene gesserit'); // 'ietrbens seeg'

### Testing
Wordscramble boasts 100% test coverage. To verify:

    npm test/test

## Contributing
Go wild! All pull requests are welcome.

## License
The code is available under the [MIT license](/LICENSE).

## FAQ

##### Why?
[Teeling Single Malt](http://www.celticwhiskeyshop.com/teeling-single-malt-).

##### Okay...
Yeah, look. Like, it was my birthday this weekend and I was gifted a bottle of whiskey. First I drank the whiskey and then I wrote this.

##### What's with all the *Dune* references?
I'm an unashamed fan for all things [_Dune_](https://en.wikipedia.org/wiki/Dune_(novel)) and Frank Herbert.

## TODO
* Add cryptographically-secure random number generation.
