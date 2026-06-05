// var a = 10;//reinitialize & redeclare
// let b = 20;//reinitialize
// const c = 30;//cannot reinitialize & redeclare

// console.log(a);
// console.log(b);
// console.log(c); 

// var num = 10;
// var str = "Hello";
// var undefine;
// var Null=null;
// var bool = true;

// console.log( typeof num);
// console.log( typeof str);
// console.log( typeof undefine);
// console.log( typeof Null);
// console.log( typeof bool);        

// var bigInt = 123n;
// var symbol = Symbol("id");

// console.log( typeof bigInt);
// console.log( typeof symbol);


// var arr=[10,20,30,40,];
// console.log(typeof arr,arr);
// var obj= {
//     Name:"PRASATH",
//     Dept:["EIE"]
// }
// console.log(typeof obj,obj);

//arthimetic operator (+,-,*,%,/)

// var a = 10;
// var b = "laks";

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);

//logical operator (&&,||,!)
//                  &&    ||  
// true true       true   true
//  true false     false  true
// false true      false  true
// false false     false  false

// var a = true;
// var b = false;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

//relational operator (>,>=,<,<=,==,!=)

// a = 10;
// b = "20";
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);

//assignment operator(=,+=,-=,%=,/=,**=)
// a=10;
//b=20;
//a=a+b;
//a+=b;
//console.log(a);
//a-=b;
//console.log(a);

//unary operator(--,++)

// var a=10;

// console.log(a++);
// console.log(++a);

// var a=10;
 
// console.log(a--);
// console.log(--a);
 
// a=1;
// b=1;
// c=0;

// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result);
// var a=10;
// var b=20;
// //if condition
// if(true){
//     console.log( `${a} + ${b} = ${a+b} `)
// }
// if(true){
//     a = 10;
//     console.log(a);
// }
//var a; //hoisting

// console.log(a);
// var a = 10;
 
// var a = 10;//global scope
// let b = 20;//global scope
// const c = 20;//block scope
// if(true){
//     console.log(a);
//    // let b = 20; //block scope
//    const c = 30;//block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a = 25;

// if(a%2==0){
//     console.log( ` ${a} is Even`);
// }
// else{
//     console.log( `${a} is Odd`);
// }
// var mark = 20;  

// if(mark>=90){
//     console.log("O Grade");
// }
// else if(mark>=70){
//     console.log(" A Grade");
// }
// else if ( mark>=35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }
 
// mark = 100;
// var result = (mark>=90)  ?  "O Grade" :
//               (mark>=70) ?  "A Grade" :
//               (mark>=35) ?  "Pass"    :
//               "Fail";
// console.log(result);

// var day = 8;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
// }
// case 2:{
//         console.log("monday");
//         break;
// }
// case 3:{
//         console.log("tuesday");
//         break;
// }
// case 4:{
//         console.log("wednesday");
//         break;
// }
// case 5:{
//         console.log("thursday");
//         break;
// }
// case 6:{
//         console.log("friday");
//         break;
// }
// case 7:{
//         console.log("saturday");
//         break;
// }
// default:{
//     console.log("Invalid Input");
// }
// }

//Looping statement

// for (var i=1;i<=10;i++){
//     console.log(i);
// }

// var val = 1024;
// var count = 0;
// while( val >  0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count);

// do{
//     console.log("Do...while")
// }while(false);

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);

// add();//Hoisting

// function add(a=5,b=10){
//     console.log(a+b);
// }
//  add();//Hoisting

//Arrow Function

// var demo = (a=5,b=6) => {
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);
//Spread operator(...)
// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr2);

//destructing operator 

// var[m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);                                 

// var {Name,mobile,dept,email,isActive} = {
//     Name:"Jaisre",
//     mobile:9876543210,
//     dept:["AIDS"],
//     email:"jaisree@gmail.com",
//     isActive:true
// }
// console.log(Name,mobile,dept,email,isActive);

// var arr = [10,20,30,40,50];

// for(let index in arr){
//     console.log(index)
// }

// for(let value of arr){
//     console.log(value)
//}

// var obj={
//     name:"Laks",
//     dept:["AIDS"],
//     mobile:9876543210,
// }
// for(let key in obj) {
//     console.log(key,obj [key])
// }
var arr = [1,2,3,4,5];
 var result = arr.map((val) => (val*2));
 console.log(result);

 var even = arr.filter((val) => (val%2==0));
 console.log(even)

 var sum = arr.reduce((add,val)=>(add+val),0);
 console.log(sum)

 var username = {
    name:"laks",
 }
 var user = {
    ...username,
    password:12345678,
 }
 console.log(uiser);