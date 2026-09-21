//  let marks  = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//  console.log(marks);
//  console.log(marks.length);
//  console.log(marks[0]);
//  console.log(marks[5]);


// let heros = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];

// // for(let idx = 0 ; idx < heros.length; idx++){
// //     console.log(heros[idx]);
// // }

// // for  of loop 

// for(let hero of  heros ){
//     console.log(hero);
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// let avg = 0;

// for(let  i =0; i<marks.length; i++){
//     sum = sum + marks[i];
//     avg = sum / marks.length;
// }
// console.log(sum);
// console.log(avg);

// for(let val of marks){
//         console.log(val);
//         sum = sum + val;


// }
// console.log(`The sum  of  marks is   :  ${sum}`);
// avg = sum / marks.length;
// console.log(`Average marks is : ${avg}`);


// let items = [250,645,300,900,50];

// for (let  i=0;  i<items.length; i++){
//     let   offer=items[i]/10;
//     items[i] = items[i]-offer;
// }
// console.log(items);

// let   foodItems = ["Pizza", "Burger", "Pasta", "Biryani", "Dosa"];
// console.log(foodItems);
// foodItems.push("Ice Cream , khoaa");
// console.log(foodItems);

// function sum (a,b){
//     let s= a+b;
//     return s;
// }
// let val = sum(10,20);
// console.log(val);

let sum = (a  , b) => {
    console.log(a+b);
}

sum(10,20);
