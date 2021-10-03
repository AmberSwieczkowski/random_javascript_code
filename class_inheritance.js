class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;  //could be used to determine a status, such as if the user is online or how many times they have 
    }
    login(){
        console.log(this.email, 'just logged in');
        return this; //allows you to chain methods
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this; //allows you to chain methods
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this; //allows you to chain methods
    }
}

var userOne = new User('clarke@the100.com', 'Clarke');
var userTwo = new User('bellamy@the100.com', 'Bellamy');
var userThree = new User('murphy@the100.com', 'Murphy');


// the Admin class will include all of the functionality of the User class plus the added methods 

/* the filter method cycles through each element in the array
    and then filter one or more element out of the array when the condition is false
    in this case, if the user's email is equal to the current email element, the user will be removed
    and if the user's email is not equal to the current email element, the user will remain in the array 
*/

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => { // u is the individual element that is being cycled through
            return u.email != user.email //when this is false, the user will be removed
        });
    }
}

var userAdmin = new Admin('octavia@the100.com', 'Octavia');
var users = [userOne, userTwo, userThree, userAdmin];

//these will be undefined if you do not "return this" in the given method
userOne.login().logout();
userTwo.updateScore().logout();
userThree.updateScore().updateScore();
userAdmin.deleteUser(userThree); //Octavia deletes Murphy
console.log(users);