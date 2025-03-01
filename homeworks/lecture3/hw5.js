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
    function setPassword(newPassword){
        if(newPassword.length !== 6) throw new Error("password must be 6 digits!")
        password = newPassword;
    }

    function checkPassword(passwordAttempt){
        return password == passwordAttempt;
    }

    return {
        setPassword: setPassword,
        checkPassword: checkPassword
    }
}

const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
user.setPassword('123'); // Error
console.log(user.checkPassword('123')); // false
user.password; // undefined