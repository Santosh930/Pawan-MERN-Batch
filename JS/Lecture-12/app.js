/* 
1.LocalStorage
2.Todoapp
3.promise(callback,then method,async/await)
4.fetch
5.arrow function,this keyword
6.settimeout,setinterval,cleartimeout,clearinterval
7.try and catch



*/

let number=123;
let str="Pawan";
let obj={
    fname:'pawan',
    lname:'sharma'
}
let arr=[
    {
        fname:'santosh',
        lname:'Kumar'
    },
    {
        fname:'Sunil',
        lname:'Kumar'
    },
    {
        fname:'Anil',
        lname:'Kumar'
    },
    {
        fname:'santosh',
        lname:'Kumar'
    },
]

//save data in localstorage
localStorage.setItem("newNum",number);
localStorage.setItem("newStr",str);
localStorage.setItem("newOBJ",JSON.stringify(obj));
localStorage.setItem("newArr",JSON.stringify(arr));

//get data from localstorage
let newNumber=localStorage.getItem("newNum",number);
console.log(newNumber);
let newString=localStorage.getItem("newStr",str);
console.log(newString)
let newObject=JSON.parse(localStorage.getItem("newOBJ",JSON.stringify(obj)));
console.log(newObject);
let newArr=JSON.parse(localStorage.getItem("newArr",JSON.stringify(arr)));
console.log(newArr);

//remove item from local storage
localStorage.removeItem("newNum");
localStorage.clear();