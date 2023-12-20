// console.log("Lecture-5");


//Bitwise And(&),OR(|)

// console.log(3 & 4);// 0
// console.log(7 & 14);//

// console.log(4 | 6);
/*
0011
0100
0000

7- 0111
14-1110
06-0110 


0100
0110
0110

*/

// console.log(10<<2);// 10*2^2=40

// console.log(20>>2);//20/4==5

// console.log(~5);//-6
/*

0000 0000 0000 0000 0000 0000 0000 0101
1111 1111 1111 1111 1111 1111 1111 1010 
0000 0000 0000 0000 0000 0000 0000 0101  


*/
//   function checkEvenOdd(age){
    
//  if(age>=18){
//     console.log(`You are eligible for Dl`);
//  }
//  else if(age<=17){
//     console.log(`You are child`);
//  }
//  else if(age==60){
//     console.log("You are senior citegen");
//  }
//  else{
//     console.log('Your age is too Long');
//  }

//   }

//   checkEvenOdd(20);//even
//   checkEvenOdd(21);//even
//   checkEvenOdd(22);//even
//   checkEvenOdd(1);//even
//   checkEvenOdd(11);//even
//for loop
// for(let i=1;i<=10;i++){
//     console.log(i);
// }


//reverse for loop

// for(let i=10;i>0;i--){
//     console.log(i);
// }

// nested loop


// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i,j);
//     }
// }


/*

//1D Array
let arr=[1,2,3,4,5,6,7];

//2D Array
let 2DArr=[
    0-[1,2,3],
   1- [4,5,6],
    2-[7,8,9]
]


*/

let TwoDArr=[
    [1,2,3],
   [4,5,6],
    [7,8,9]
];

// // console.log(TwoDArr);
// console.log(TwoDArr[1][2]) 
for(let i=0;i<TwoDArr.length;i++){
    console.log(TwoDArr[i][TwoDArr.length-1-i]);
}

