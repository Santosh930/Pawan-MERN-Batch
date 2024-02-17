// console.log("Events");

// let incr=document.querySelector('#inc').addEventListener('click',incriment);
let incr=document.querySelector('#inc');
incr.addEventListener('click',incriment);
let decr=document.querySelector('#dec').addEventListener('click',decriment);
let res=document.querySelector('#res').addEventListener('click',reset);
// console.log(incr);



var count=0;

function  incriment(){

    // console.log("Inside incriment function");
    let p=document.getElementById('demo');
    count++;
    p.innerHTML=count;
    

}

function  decriment(){
    if(count<0) return;

    // console.log("Inside incriment function");
    let p=document.getElementById('demo');
    count--;
    p.innerHTML=count;
    

}

function  reset(){
    
    // console.log("Inside incriment function");
    let p=document.getElementById('demo');
    count=0
    p.innerHTML=count;
    

}