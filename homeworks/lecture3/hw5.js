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
    // implement here
    let password;

    // Public method to set password
    this.setPassword = function(newPassword) {
        if (newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
        password = newPassword;
    };

    // Public method to check password
    this.checkPassword = function(passwordToCheck) {
        return passwordToCheck === password;
    };
}
const user = new User();
console.log(user.setPassword('123456'));
console.log(user.checkPassword('123456'));
console.log(user.checkPassword('123'));
console.log(user.password);
//user.setPassword('123');
// user.checkPassword('123');
// user.password;
