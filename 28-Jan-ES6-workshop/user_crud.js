`use strict`;

class User {
    constructor(id) {
        this.id = id;
    }
    set userName(name) {
        this.name = name;
    }
    set userAdd(add) {
        this.add = add;
    }
    set userContact(contactno) {
        this.contactno = contactno;
    }
    get userDet() {
        return this.name +', '+ this.add +', '+ this.contactno;

    }

}

//Array of User objects
let ArrayOfUsers = [];

//Create and Push User to Array of Users
function createNewUser(id, userName, userAdd, userContact) {
    let user = new User(id);
    user.userName = userName;
    user.userAdd = userAdd;
    user.userContact = userContact;
    ArrayOfUsers.push(user)    
}
createNewUser(1, 'Tommy Vercetti', 'Vice City, FL', 8182838485);
createNewUser(2, 'Claude', 'Liberty City, Liberty', 7172737475);
createNewUser(3, 'Carl Johnson CJ', 'Los Santos, LS', 6162636465);
createNewUser(4, 'Vince Vance', 'Vice City, FL', 5152535455);
// console.log(ArrayOfUsers);

//Find User by ID
function findUserById(id) {
    const UserById = ArrayOfUsers.find(user => user.id === id);
    return UserById;
}

//console.log(`User: `, findUserById(3));

//Group users by address
function findUsersBySameAddress() {
    //Backing up original array of objects
    let ArrayOfUserBkp = ArrayOfUsers;

    //Map each object's address to it's count of occurrences -1
    //accumulator object will be passed from one callback to next by reduce
    const UsersBySameAddress = ArrayOfUserBkp.reduce((accumulator, elem)=>{
        accumulator[elem.add] = ++accumulator[elem.add] || 0;
        return accumulator;
    }, {});

    //Filter uses Truthness of ArrayOfUserBkp[elem.add] to check if it is unique or not.
    console.log(ArrayOfUserBkp.filter(e => UsersBySameAddress[e.add]))
}


//Edit user selected by Id
function editUserById(id, name, add, contactno) {
    const UserById = ArrayOfUsers.find(user => user.id === id);
    console.log(typeof(UserById));
    UserById.userName = name;
    UserById.userAdd = add;
    UserById.userContact = contactno;
    console.log(id);
    ArrayOfUsers.splice(id-1, 1, UserById);
    // console.log(ArrayOfUsers[id]);
}

//Delete user by Id
function deleteUserById(id) {
    //Map user.id and then get the selected user
    let UserToDeleted = ArrayOfUsers.map((user)=>{return user.id}).indexOf(id);
    //delete that user.
    ArrayOfUsers.splice(UserToDeleted, 1);
}

// editUserById(3, 'CJ', 'GS, LS, SA', 6162636465);
// console.log(ArrayOfUsers);

//Function calls

createNewUser(5, 'Niko Bellic', 'Liberty City, Liberty', 9192939495);
//console.log(ArrayOfUsers);
//console.log(findUserById(4));
findUsersBySameAddress();
// editUserById(3, 'Carl Johnson', 'Grove St., LS, SA', 6162636465);
//deleteUserById(4);
//console.log(ArrayOfUsers);
// console.log(ArrayOfUsers);


//.split().rotate().join()