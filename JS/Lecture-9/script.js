// console.log('Lecture-9');

// 1.Spread syntax (...)
// one to many
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
// expand an iterable(arr,string,obj) into multiple values
// let arr=[1,2,3,4,5,6,7];

// let minNumberWithSpread=Math.min(...arr);
// let minNumberWithoutSpread=Math.min(arr);
// console.log(arr);// [1, 2, 3, 4, 5, 6, 7]
// console.log(...arr);// 1 2 3 4 5 6 7
// console.log(minNumberWithSpread);//1
// console.log(minNumberWithoutSpread);//NaN

//2.Rest Parameters
//many to one
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

// function sum(...theArgs) {
//   let total = 0;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
// Expected output: 6

// console.log(sum(1, 2, 3, 4));
// Expected output: 10

//3. Destructuring

// let [a,b,c,d,...others]=[1,2,3,4,5,6,7,8,9,10];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(others);

// let obj={username:'santosh',password:12345,id:1000,mob:9873481283};
// let {username,password,...other}=obj;
// console.log(username);
// console.log(password);
// console.log(other);


//4.CallBackhell

// let demo=document.querySelector('#demo');
//1st method
// setTimeout(()=>{
//     demo.style.color='red';
// },1000);
// setTimeout(()=>{
//     demo.style.color='yellow';
// },2000);
// setTimeout(()=>{
//     demo.style.color='green';
// },3000);
// setTimeout(()=>{
//     demo.style.color='aqua';
// },4000);
//2nd Method
// function changeColor(color,delay){
//     setTimeout(()=>{
//         demo.style.color=color;
//     },delay);
// }
// changeColor(('green'),1000);
// changeColor(('red'),2000);
// changeColor(('aqua'),3000);

//3rd method
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         demo.style.color=color;
//         if(nextColorChange) 
//         nextColorChange();
//     },delay)
// };
// //callback hell
// changeColor('red',1000,()=>{
//     changeColor('yellow',1000,()=>{
//         changeColor('aqua',1000,()=>{
//             changeColor('pink',1000,()=>{
//                 changeColor('green',1000,()=>{
//                     changeColor('blue',1000);
//                 })
//             })
//         })
//     })
// })
//5.Promise
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Promise
// let myPromise=new Promise((res,rej)=>{
//     let internetSpeed=Math.floor(Math.random()*20);
//     console.log(internetSpeed);
    
//     if(internetSpeed>=10){
//         res("success:data was saved!");
//     }
//     else{
//         rej("failure:data was not saved");
//     }
// });
// // console.log(myPromise);
// myPromise.then((res,rej)=>{
//     console.log('data was saved to db');
    
// }).catch((err)=>{
//     console.log(err);
// });

// function saveToDB(DB){
//     return new Promise((res,rej)=>{
//         let internetSpeed=Math.floor(Math.random()*100);
//         console.log(internetSpeed);
//         if(internetSpeed>=40){
//             res(`success:${DB} was saved to DB!`);
//         }
//         else{
//             rej(`failure:${DB} was not saved to db!`)
//         }
//     });

// }
// let ans=saveToDB('SQL');
// console.log(ans);
// saveToDB('SQL').then(()=>{
//     console.log(`data1 was saved!`);
//     return saveToDB('MySQL');

// }).then(()=>{
//     console.log(`data2 was saved!`);
// }).catch((err)=>{
//     console.log(err);
// })