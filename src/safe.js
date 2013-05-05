/*
 * Safe.js 0.1.0
 * https://github.com/stuartbannerman/safe
 *
 * Copyright 2013 Stuart Bannerman (me@stuartbannerman.com)    
 * Released under the MIT license
 *
 * Date: 05-05-2013
 */

(function()
{
    var Safe = function()
    {
        return (function()
        {
            var store = {};

            return {
                /**
                 * Generate a random string to be used as a safe secret
                 * @return {String} The generated string
                 */
                secret: function()
                {
                    return Math.random().toString(36).substring(2);
                },
                /**
                 * Generate a safe to store stuff in
                 * @param {String} secret A secret to access the safe
                 * @return {Object} The safe
                 */
                generate: function(secret)
                {
                    store[secret] = store[secret] || {};

                    return store[secret];
                },
                /**
                 * Access a safe and retrieve any values in it
                 * @param {String} secret The secret of the safe you want to access
                 * @return {Object|undefined} The safe or undefined if an invalid secret was provided
                 */
                access: function(secret)
                {
                    return store[secret];
                },
                /**
                 * Create a new Safe instance
                 * @return {Safe} The new safe instance
                 */
                instance: function()
                {
                    return new Safe();
                }
            };
        })();
    };

  // Export for both CommonJS and the Browser.
  (typeof exports !== 'undefined' ? exports : this).Safe = new Safe();

}).call(this);