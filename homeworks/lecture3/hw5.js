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
  let password = "";

  this.setPassword = function (newPassword) {
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
    password = newPassword;
  };

  this.checkPassword = function (inputPassword) {
    return inputPassword === password;
  };
}

const user = new User();

try {
  user.setPassword("123456");
  console.log(user.checkPassword("123456")); // true
  console.log(user.checkPassword("123")); // false
  console.log(user.password); // undefined

  user.setPassword("123"); // Throws an error
} catch (error) {
  console.log(error.message); // "Password must be at least 6 characters long"
}

console.log(user.checkPassword("123")); // false
console.log(user.password); // undefined
