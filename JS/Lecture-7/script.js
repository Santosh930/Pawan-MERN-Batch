// console.log("Locale Storage");

// let number=12345;
// let str='Pawan';
// let obj={
//     fnmae:'Pawan',
//     lname:'Sharma'
// }
// let arr=[1,2,3,4,5];
// let arrObj=[{
//     fnmae:'Pawan',
//     lnmae:'sharma'
// },{
//     fname:'santosh',
//     lname:'kumar'
// }];
// localStorage.setItem('newArrObj',JSON.stringify(arrObj));
// localStorage.setItem('newArr',JSON.stringify(arr));
// localStorage.setItem('newObj',JSON.stringify(obj));

// //to save data in localstorage
// localStorage.setItem('newNumber',number);
// localStorage.setItem('newStr',str);

// // to get item from local storage

//  let res=localStorage.getItem('newNumber');
//  let res1=localStorage.getItem('newStr');
//  let res2=JSON.parse(localStorage.getItem('newObj'));
//  let res3=JSON.parse(localStorage.getItem('newArr'));
//  let res4=JSON.parse(localStorage.getItem('newArrObj'));
//  localStorage.removeItem('newArr');
//  localStorage.clear();
 
//  console.log(res);
//  console.log(res1);
//  console.log(res2);
//  console.log(res3);
//  console.log(res4);


//TodoApp

let form=document.querySelector('form');
form.addEventListener('submit',todoApp);
let arr=JSON.parse(localStorage.getItem('taskArr'))||[];

function todoApp(){
    event.preventDefault();
    // console.log('inside function');

    let obj={
        task:document.getElementById('task').value,
        priority:document.getElementById('priority').value
    }
    // console.log(obj);
    arr.push(obj);

    localStorage.setItem('taskArr',JSON.stringify(arr))
    // console.log(arr);
    displayData(arr);
}


function displayData(arr){
    let tbody=document.querySelector('tbody');
    tbody.innerText=null;

    arr.forEach(function(elem,index,arr){
  
  let tr=document.createElement('tr');
  let col1=document.createElement('td');
  let col2=document.createElement('td');
  let col3=document.createElement('td');
  col1.innerText=elem.task;
  col2.innerText=elem.priority;
  if(elem.priority=='High'){
    col2.style.backgroundColor='red';
  }
  else{
    col2.style.backgroundColor='green';
  }
  col3.innerText="Delete";
  col3.addEventListener("click", function () {
    //event.target.parentNode.remove();
    deleteRow(elem, index);
  });
  col3.style.color = "red";
  tr.append(col1,col2,col3);
  tbody.append(tr);


    })
}
function deleteRow(elem, index) {
    //console.log(elem, index)
    arr.splice(index, 1);
    // console.log(taskArr);
    localStorage.setItem("taskArr", JSON.stringify(arr));
    displayData(arr);
  }
 