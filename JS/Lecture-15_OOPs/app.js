// console.log(1234);


// class Employee{
//     constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
        
//     }

//     printFullName(){
//         console.log(`${this.fname}  ${this.lname}`);
        
//     }
// }

// let e1=new Employee('santosh','kumar');
// let e2=new Employee('Mantosh','kumar');
// let e3=new Employee('pawan','kumar');
// let e4=new Employee('ram','kumar');
// let e5=new Employee('aman','kumar');


// e1.printFullName();
// e2.printFullName();
// e3.printFullName();
// e4.printFullName();
// e5.printFullName();

// class Car{
//     constructor(name,brand){
//         this.name=name;
//         this.brand=brand;
//         this.wheels=4;
//     }

//     GetSpeed(){
//         console.log(`The speed of ${this.name} is 120km/h`);
//     }
// }

// let c1=new Car('duster','renault');
// let c2=new Car('bolero','mahindra');
// console.log(c1);
// console.log(c2);
// c2.GetSpeed();

// class Sedan extends Car{
//     constructor(name,brand){
//         super(name,brand);
//         this.sunroof=true;
//     }


// }

// let s1=new Sedan('Swift Desire','Maruti Suzuki');
// console.log(s1);

//encapsuletion

// class Employee{
//     constructor(){
//         let name;
//         let rating;
//     }
//     getName(){
//         return this.name;

//     }
//     setName(value){
//         this.name=value;

//     }
// }
// let e1=new Employee();
// e1.setName('Santosh');
// console.log(e1.getName());

//abstraction

// class Employee{
//     constructor(n,r){
//         this.name=n;
//         this.rating=r;
//         this.skills=[];
//     }
//     learnSkills(skill){
//         this.skills.push(skill);
//     }
// }

// let e1=new Employee('Santosh',10);
// e1.learnSkills('oops');
// e1.learnSkills('oops1');
// e1.learnSkills('oops2');
// e1.learnSkills('oops3');
// console.log(e1);


//4.  Polymorphism

// class Vehicle{
//     run(){
//         console.log('Vehicle is running');
//     }
// }
// class Car extends Vehicle{
//     run(){
//         console.log(`Car is running`);
//     }
// }
// class Truck extends Vehicle{
//     // run(){
//     //     console.log(`Truck is running`);
//     // }
// }

// let v1=new Vehicle();
// let v2=new Car();
// let v3=new Truck();
// v1.run();
// v2.run();
// v3.run();



