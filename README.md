# Safe.js

A module for providing private, client-side, self-contained, storage of arbitrary data.

## Description

This is a trival implementation, and something that will probally never be used (I was bored so I wrote it, hopefully this will help someone...maybe :) ).

+ A 'Safe' is a container for multiple private objects that can ony be acessed by a callee if it provides the correct secret key.
+ Multiple Safes can be instanced (if required), each with their own private storage.
+ Secrets can be passed between objects so that they can access the same private storage


Some weird and wonderful things can be implemented with this... such as: 
Multiple objects sharing the same private storage so that they can pass values between each other/update a shared reference, without others being able to access/modify it. :)

Here that follows are some examples of how to use this tiny module.

## Examples

### Generating a secret instead of hardcoding

```javascript

// Generate a random string to be used as  a secret
var secret = Safe.secret(); // -> mh95l3omr2l9dx6r

```

### Basic example

```javascript

// Our secret key
var secret = '42';
// Generate private storage with our secret
var priv = Safe.generate(secret);
// Set some arbitrary value in our safe
priv.name = 'John';

// Retrieve our safe again
var priv = Safe.access(secret);
console.log(priv.name); // -> John

```

### Multiple Safe instances

```javascript

// Our secret key
var secret = '42';
// Create 2 seperate Safe instances
var safe1 = Safe.instance();
var safe2 = Safe.instance();

// Set some arbitrary value in safe1
var priv1 = safe1.generate(secret);
priv1.name = 'John';

// Now try and access our value out of safe2
var priv2 = safe2.access(secret)
console.log(priv2); // -> undefined

```

## Contributions and using

If anyone does feel like using this then that's awesome!! :) Could you give me a heads up (me@stuartbannerman.com), just for my own interest/ego :)

Also, if anyone has some suggestions/bugs/etc feel free to log them/contact me.

## License

MIT