// console.log(2);






// let student={
//     name:'Santosh',
//     roll_number:1,
//     email:'santoshtajpur@gmail.com',
// }

// console.log(student);


// console.log(student.name);
// console.log(student['name']);


// for(let key in student ){
//     console.log(student[key]);
// }


/**
 a-1
 b-2
 c-3
 .....z-26
 */

//  let lower='abcdefghijklmnopqrstuvwxyz';
// //  let value=1;
//  for(let i=0;i<lower.length;i++){
//     console.log(lower[i] +"-"+ Number(i+1));
//     value++;
//  }


// let obj = new Object();
// obj.first_name='pawan';
// obj.fullName=function(){
//     console.log(this.first_name);
// }
// obj.fullName();

// let obj1=[{
//     name:'abc'
// },{
//     name:'abc'
// },{
//     name:'abc'
// },{
//     name:'abc'
// },{name:'abc'},{name:'abc'}]
// console.log(obj1);


//3) By using an Object constructor


function Add(id,name,email){
    this.id=id,
    this.name=name,
    this.email=email
}


let obj1=new Add(1,'pawan','pawan@gmail.com');
let obj2=new Add(2,'raman','pawan@gmail.com');
let obj3=new Add(3,'santosh','pawan@gmail.com');
let obj4=new Add(4,'sunil','pawan@gmail.com');
let obj5=new Add(5,'anil','pawan@gmail.com');

console.log(Object.entries(obj1));
// console.log(obj5);
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');
// let obj1=new Add(1,'pawan','pawan@gmail.com');