// Singleton 

const trinderUser = new Object()
// const trinderUser = {}

trinderUser.id = "12121dc";
trinderUser.name = "RDJ";
trinderUser.iSLoggedIn = false;
// console.log(trinderUser);

const  regularUser  = {
    emali: "Ricky_p@gmail.com",
    fullname:{
        username:{
            firstname:"Ricky",
            lastname:"Patel",
        }
    }
}

//console.log(regularUser.fullname.username);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

const obj3 = {...obj1,...obj2,...obj4};
// console.log(obj3);

const Users = [
    {
        id:1,
        emali:"rickypatel@gmail.com",
    },
]

// Users[1].emali
console.log(trinderUser);

// console.log(Object.keys(trinderUser));
// console.log(Object.values(trinderUser));
console.log(Object.entries(trinderUser));

console.log(trinderUser.hasOwnProperty('iSLoggedIn'));        