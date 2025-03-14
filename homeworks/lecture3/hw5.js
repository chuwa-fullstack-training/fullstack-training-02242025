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
    let password = "";
    this.setPassword = function (newPassword){
        if (newPassword.length < 6) {
            throw new Error("Error");
        }
        password = newPassword;
    };
    
    this.checkPassword = function(inputPassword) {
        return inputPassword === password;
    };
}

const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); 
console.log(user.checkPassword('123')); 
try {
    user.setPassword('123');
} catch(error) {
    console.log(error.message);
};
console.log(user.setPassword('123'));
console.log(user.password);