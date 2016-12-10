# Safe

[![Build Status](https://travis-ci.org/m3talstorm/safe.svg?branch=master)](https://travis-ci.org/m3talstorm/safe)  [![Npm Version](https://img.shields.io/npm/v/safe.svg?style=flat)](https://www.npmjs.org/package/safe) [![Node Version](https://img.shields.io/node/v/safe.svg?style=flat)](https://www.npmjs.org/package/safe) [![Issues](https://img.shields.io/github/issues/m3talstorm/safe.svg?style=flat)](https://github.com/m3talstorm/safe/issues)

A module for providing private, client-side, self-contained, storage of arbitrary data.

## Description

This is a trival implementation, and something that will probally never be used (I was bored so I wrote it, hopefully this will help someone...maybe).... basically a glorified closure :)

+ A 'Safe' is a container for multiple private objects that can ony be acessed by a callee if it provides the correct secret key.
+ Multiple Safes can be instanced if required, each with their own private storage.
+ Secrets can be passed between objects so that they can access the same private storage


Some weird and wonderful things can be implemented with this... such as:
Multiple objects sharing the same private storage so that they can pass values between each other/update a shared reference, without others being able to access/modify it. :)

Here are some examples of how to use this tiny module.

## Examples

```javascript
const Safe = require('safe')
// Instance a global Safe object
const safe1 = new Safe()
// Generate a random string to be used as a secret -> mh95l3omr2l9dx6r
const secret = Safe.secret()
// Generate private storage with our secret
let priv1 = Safe.generate(secret)
// Set some arbitrary value in our safe
priv.name = 'John'
// Retrieve our safe again
let priv2 = Safe.access(secret)
// -> John
console.log(priv2)
```

### Multiple Safe instances

```javascript
const Safe = require('safe')
// Generate a random string to be used as a secret -> mh95l3omr2l9dx6r
const secret = Safe.secret()
// Instance 2 seperate Safe instances
const safe1 = new Safe()
const safe2 = new Safe()
// Set some arbitrary value in safe1
let priv1 = safe1.generate(secret)
priv1.name = 'John';
// Now try and access our value out of safe2
let priv2 = safe2.access(secret)
// -> undefined
console.log(priv2)
```

## License

MIT
