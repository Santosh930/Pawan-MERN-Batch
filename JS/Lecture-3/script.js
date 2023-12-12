// console.log("Hello");

//Object

// let obj={
//     name:"Pawan Sharma",
//     city:"Delhi",
//     mob:9873481283,
//     arr:[1,2,3,4,5],
//     email:"pawan@gmail.com"
// }

// console.log(obj);
// console.log(obj.city);
// console.log(obj["name"]);
// console.log(obj);
// console.log(obj);
//for in loop
// for(var key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }


//2. By creating instance of Object

// var obj=new Object();
// obj.name="Pawan";
// obj.email="pawan@gmail.com";
// obj.arr=[1,2,3,4,5];
// console.log(obj);


//3) By using an Object constructor

//add

// function add(a,b,c){
//     let sum=a+b+c;
//     console.log(sum);
// }
// add(10,20,30);

function obj(name,email,city,salary){
    this.name=name,
    this.email=email,
    this.city=city,
    this.salary=salary,
    function salary(id){
        this.id=id;

    }
}

let newObj= new obj("Pawan","pawan@gmail.com","Delhi");
let pawan=new obj("santosh","santoshtajpur@gmail.com",9873481283);
// console.log(obj);
// console.log(newObj.name);
pawan.mob=1233455667;
console.log(pawan)
