// Singleton 

// Object listerals

// let mysem  = Symbol("Key1");


let JSUsers = {
    // [mysem]:"key1",
    name : "Ricky",
    "Full name": "Patel Ricky",
    age : 18,
    Email:"Ricky@gmail.com",
    IsLoggoId : false,
};

// console.log(JSUsers.Email);
// console.log(JSUsers["Email"]);
// console.log(JSUsers["Full name"]);
// console.log(JSUsers[mysem]);

// JSUsers.Email = "Ricky_P@gamil.com";
// Object.freeze(JSUsers);

// JSUsers.Email = "PAtel_R@gamil.com";
// console.log(JSUsers);

JSUsers.greeting = function(){
    console.log("Hello JS Users");
}

JSUsers.greetingTwo = function(){
    console.log(`Hello Js Users,${this.name}`);
}
console.log(JSUsers.greeting());
console.log(JSUsers.greetingTwo());