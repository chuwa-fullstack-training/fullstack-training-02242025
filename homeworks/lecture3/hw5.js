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
class User{

    constructor (){
        let password = '';

        this.setPassWord = function(newPassword) {
            if (newPassword !== null && newPassword.length>3 && typeof newPassword =='string' ){
                password=newPassword;
            } else{
                throw ("new password is not valid")
            }
        }
        this.checkPassword = function(inputPassword){
            return inputPassword = password;
        }
    }
}