// const student = {
//     fullName: "Rahul kumar ",
//     age: 22,
//     cgpa:8.5,
//     ispass : true
// }

// console.log(student);


// //Logical Operators 

// let a= 5;

// let b = 15;

// let cond_01 = a != b;

// console.log(cond_01);

// let cond_02 = a < b;
// console.log(cond_02);

// console.log("cond_01 && cond_02", cond_01 && cond_02);


//Conditional Statements

// let marks =  5 ;

// if(marks >= 30){
//     console.log("You are pass");
// }

// if(marks < 30){
//     console.log("You are fail");
// }



// let age = 0;

// if(age >= 18){
//     console.log("You are eligible for voting");
// }else{
//     console.log("You are not eligible for voting");
// }


//Odd and even number

// let num = 30;

// if(num % 2 ==0 ){
//     console.log("The number is even");  
// }else{
//     console.log("The number is odd");
// }


// let age = 20;

// let result = age >=  18 ?  "adult" : "not adult";

// console.log(result);






// //multiplly check 

// let num = prompt ("Enter a number");

// if(num % 5 ==0 ){
//     console.log("The number is multiple of 5");
// }else{
//     console.log("The number is not multiple of 5");
// }



//check Grade 

let marks = prompt("Enter your marks");
if(marks >=80 && marks <= 100){
    console.log("Grade A");
}else if(marks >= 70 && marks <80){
    console.log("Grade B");
}else if(marks >= 60 && marks < 69){
    console.log("Grade C");
}else if(marks >= 50 && marks < 59){
    console.log("Grade D");
}else if(marks >= 30 && marks < 49){
    console.log("Grade F");
}else{
    console.log("Fail");
}
    