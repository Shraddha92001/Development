const person = [{
    firstname: "shree",
    lastname: "singh",
    age: 22
},
{
    firstname: "neha",
    lastname: "sagvita",
    age: 19
},
{
    firstname: "rahul",
    lastname: "rajput",
    age: 24
},
{
    firstname: "rudra",
    lastname: "verma",
    age: 6
}]

for (let i = 0; i < person.length; i++) {
    if (person[i]['lastname'] == 'verma') {
        console.log(person[i]['firstname']);
    }
//    console.log( person[i]);
}
// console.log(person);