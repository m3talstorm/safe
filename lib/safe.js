const Safe = function()
{
    const store = {}

    return {
        /**
        * Generate a safe to store stuff in
        * @param {String} secret A secret to access the safe
        * @return {Object} The safe
        */
        generate: function(secret) {

            store[secret] = store[secret] || {}

            return store[secret]
        },
        /**
        * Access a safe and retrieve any values in it
        * @param {String} secret The secret of the safe you want to access
        * @return {Object|undefined} The safe or undefined if an invalid secret was provided
        */
        access: function(secret) {

            return store[secret]
        },
        // Allow access via object or class
        secret: Safe.secret
    }
}

/**
* Generate a random string to be used as a safe secret
* @return {String} The generated string
*/
Safe.secret = function() {
    return Math.random().toString(36).substring(2)
},

module.exports = Safe
