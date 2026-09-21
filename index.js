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

// let marks = prompt("Enter your marks");
// if(marks >=80 && marks <= 100){
//     console.log("Grade A");
// }else if(marks >= 70 && marks <80){
//     console.log("Grade B");
// }else if(marks >= 60 && marks < 69){
//     console.log("Grade C");
// }else if(marks >= 50 && marks < 59){
//     console.log("Grade D");
// }else if(marks >= 30 && marks < 49){
//     console.log("Grade F");
// }else{
//     console.log("Fail");
// }




    // 
    //  loops 
    // //FOR LOOP 

    // let num= prompt("Enter a number");

    // for (let count = 1 ; count <= num ; count++
    // ){
    //     console.log(count);
    // }


    // for of loop 

    // let str = "Navaneet_Sharma";
    // let size = 0;

    // for (let i of str ){
    //     console.log("i =", i);
    //     size++;
    // }

    // console.log("size of string is ", size);



    // const student ={
    // fullName: "Rahul kumar ",
    // age: 22,        
    // cgpa:8.5,
    // ispass : true
    // }

    // for (let key in student){
    //     console.log( " key ",    key, " Value ", student[key]);

    // }



// let gameNum = 25;
// let userNum = Number(prompt("guess the number between 1 to 50"));

// while (userNum !== gameNum) {
//     userNum = Number(prompt("wrong guess! guess the number between 1 to 50"));
// }

// console.log("Congratulations! You are correct. The number is ", gameNum);


let fullName = prompt("Enter your full name");

let userName =  "@"+ fullName + fullName.length;

console.log( "Your username is: ",userName);