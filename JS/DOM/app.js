// console.log(1);





//how to get element

//1 by selecting id

// let demo=document.getElementById('demo');
// console.log(demo);
// console.log(demo.innerText);
// console.log(demo.innerHTML);

// let box=document.getElementById('box');
// // box.innerHTML="<h1>Hello I am a div inside innerHTML</h1>"
// box.innerText="Hello I am a div inside innertext"
//selecting element by className
// let para=document.getElementsByClassName('para');
// for(let i=0;i<para.length;i++){
//     console.log(para[i].innerText);
// }
// console.log(para[0].innerText);
// console.log(para);
// console.log(para);
// console.log(para);
// console.log(para);


//  By tagname

// let p=document.getElementsByTagName('p');
// // console.log(p);
// for(let i=0;i<p.length;i++){
//         console.log(p[i].innerText);
//     }

// function myFunction(){
//     let name=document.getElementById('name');
//     let ans=name.value;
//     console.log(ans);

// }


// console.log(name);
// name.value='000000'


//By Name

// let name=document.getElementsByName('name');
// console.log(name);


//creat a new html element

// function myFunction(){
    // let container=document.getElementById('box');
    // let name=document.getElementById('name');
    // let p=document.createElement('div');
    // p.innerText=name.value;

    // document.write(p.innerText);
    // let btn=document.createElement('button');
    // btn.innerText='Submit';
    // let h1=document.createElement('h1');
    // h1.innerText="Santosh Kumar";


    // container.append(h1,p,btn);

    

// }

//apply style

let h1=document.querySelector('h1');
h1.style.backgroundColor='aqua';
let h2=document.querySelectorAll('h2');
for(let i=0;i<h2.length;i++){
    h2[i].style.backgroundColor='red';
}
// console.log(h1)
// console.log(h2)




