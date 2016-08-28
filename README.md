![](/banner.png)

# Wordsramble
Wordscramble is a completely pointless Node package which you shouldn't install. The *only* thing wordscramble does is scramble JavaScript object values. This is an [is-thirteen](https://github.com/jezen/is-thirteen) level of uselessness.

On the other hand, Wordscramble is reaonably robust against whatever random crap you throw at it, and it does some cool stuff with recursion to get the job done.

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

    var scramble = require('wordscramble').ws;
    scramble(true); // false
    scramble(0.123131231); // 11.32233110
    scramble('heighliner'); // glhenehrii
    scramble({atreides: 'Caladan', corinno: 'Kaitain'}); //{ atreides: 'ladnaCa', corinno: 'anaiKit' }
    scramble(['Atreides', 'Harkonnen', 'Corrino', 'Ginaz']); // [ 'oeannHnkr', 'znaGi', 'estrAedi', 'roirnoC' ]

### Testing
Wordscramble boasts 100% test coverage. To verify:

    npm test

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
I'm an unasahmed fanboy.

## TODO
* Add cryptographically-secure random number generation.
