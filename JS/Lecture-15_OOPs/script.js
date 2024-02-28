// console.log('Debouncing');
let counter=0;

function getData(){
    //calls an api and getting data...
    console.log(`fetching data... ${counter}`);
    counter++;
}
function magicFunction(func,d){
    let timer;
    return function(){
let context=this,args=arguments;
clearTimeout(timer);
      timer=setTimeout(function(){
        getData.apply(context,arguments);

        },d)

    }
}

const debaunce=magicFunction(getData,500);