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
    let password = undefined; // 私有变量，外部无法访问

    this.setPassword = function(newPassword) {
        if (newPassword.length < 6) {
            throw new Error('Password must be at least 6 characters long.');
        }
        password = newPassword;
    };

    this.checkPassword = function(inputPassword) {
        return password === inputPassword;
    };
}