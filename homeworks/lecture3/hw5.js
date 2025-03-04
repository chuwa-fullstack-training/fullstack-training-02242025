/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 *
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    let password
    this.setPassword = function(password) {
       password = password
    }
    this.checkPassword = function(input) {
        console.log(input === password)
    };
    this.setPassword = function(input) {
        if(password) {
            throw new Error("Error")
        }
        password = input;
    };
}


const user = new User();
user.setPassword('123456');
user.checkPassword('123456'); // true
user.checkPassword('123'); // false
user.password; // undefined
user.setPassword('123'); // Error
user.checkPassword('123'); // false
user.password; // undefined
