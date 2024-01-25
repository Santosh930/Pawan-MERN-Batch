// console.log("String");




// let str="Santosh Kumar";
// str[0]='M';
// console.log(str);

// let bag='';
// for(let i=0;i<str.length;i++){
//     if(str[i]=='S'){
//         bag += 'M';
//     }
//     else{
//         bag += str[i];
//     }
// }
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(bag);


//Check Palindrom

// let str='abcbar';
// let bag=str.reverse();
// for(i=str.length-1;i>=0;i--){
//     bag += str[i];
// }

// if(str==bag){
//     console.log("It is a palindrome");
// }
// else{
//     console.log("It is not a palindrome");

// }

// let arr=['Mango',2,3,4,5];
// console.log(arr.reverse());

// let str='abcd';

/* 
a
b
c
d
ab
bc
cd
abc
bcd
cda
abcd


*/
// Sub string
// for(let i=0;i<str.length;i++){
//     let bag='';
//     for(let j=i;j<str.length;j++){
//         bag += str[j];
//         console.log(bag);
//     }
// }

//Sub Array

// let arr=[1,2,3,4,5];

// for(let i=0;i<arr.length;i++){
//     let arr1=[];
//     for(let j=i;j<arr.length;j++){
//         // bag += str[j];
//         arr1.push(arr[j]);
//         console.log(arr1);
//     }
// }



let str='pawan kumar from bihar';
console.log(str.charAt(2));
console.log(str.indexOf('w'));
console.log(str.split(' '));