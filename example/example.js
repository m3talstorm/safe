

const Safe = require('../lib/safe')
// Instance a global Safe object
const safe1 = new Safe()
// Generate a random string to be used as a secret -> mh95l3omr2l9dx6r
const secret = safe1.secret()
// Generate private storage with our secret
let priv = safe1.generate(secret)
// Set some arbitrary value in our safe
priv.name = 'John'
// Retrieve our safe again
let priv2 = safe1.access(secret)
// -> John
console.log(priv2)
