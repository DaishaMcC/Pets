var globalVariable = "Hi I'm a global variable"; //this is a global variable
function myFunction(){
    var localVariable = "Hi I'm a global variable";
    console.log(globalVariable);
    console.log(localVariable);
}
myFunction();

//object literal
let student1 ={
    name: "Kevin",
    email: "kevin@gmail.com",
    grades101: 10,
    grades102: 8,
    favSport: "Football",
}
let student2={
    name: "Blake",
    email: "blake@gmail.com",
    grades101: 8,
    grades102: 10,
    favSport: "Hunting",
}
let students = {student1, student2};
console.log(students);
console.log(student1.name);
console.log(student1.email, student2.email);

//display the sum of all the grades of 101
function getSum(){
    let grades = 0;
    for(let i = 0;i<2;i++)
    {
        grades=grades+students[i].grades101;
    }
    console.log(grades);
}
getSum();