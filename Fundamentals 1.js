/*
let js="amazing";
if(js==="amazing") alert("JavaScript is FUN1");
 40+8+23-10;
 console.log(40+8+23-10);*/

/*Values and Variables*/
/*value is the smallest unit of infromation in js , We can store value as a variable so we can use them over and over again*/
/*let firstName="Oormila"; //Variable name should be in camel case
console.log(firstName);

//WRONG
//let 3years=3;
//let function=27;
// let person='oormila';
//let PI=3.1415; if its constant means we can give in capital letter
//varaible name cannot start with numbers .so this is wrong

/*DATA TYPES(primitive data types 7 )
let age =22; Number
let firstName='Oormila';  String
let fullAge = true; Boolean
let children; Undefined
Null empty value
Symbol(ES2015) value is unique that cannot be changed
BigInt(ES2020) Larger integers than the Number type can hold
*/
 /*type of operator

 let javaScriptIsFun = true;
 console.log(javaScriptIsFun);
 console.log(typeof true);
 console.log(typeof javaScriptIsFun);
 console.log(typeof 23);
 console.log(typeof "Oormila");
javaScriptIsFun = "YES1";
console.log(typeof javaScriptIsFun); String
let year;
console.log(typeof year); undefined*/

/*let,const,var
let age=30;
age=31; /value can be changed
const  year= 1234 ; value cannot changed
 var job="Programmer"; no error
 job="Student";*/
/*
 //Basic Operators
 const now = 2024
 const ageOormila = now - 2002;
 const ageYokesh = now - 2002;
 console.log(ageOormila, ageYokesh);
 console.log(ageOormila*2,ageYokesh/10,2**3);
 //2**3 means 2 to the power of 3=2*2*2
 const firstName= "Oormila";
 const lastName="Yokesh";
 console.log(firstName + " " +lastName);

//Assignment operators
let x= 10+5;//15
x+=10;//x=x+10 //25
x*=4;//x=x*4//100
x++; //x=x+1//101
x--;//x=x-1//100
x--; //x=x-1//99
console.log(x);

//comparison operators
console.log(ageOormila>ageYokesh);//true
console.log(ageOormila>=18);//true
const isFullAge = ageOormila>=18;
console.log(now - 2002 > now- 2014);*/

/*//Operator procedence
const now = 2037;
const ageOormila= now - 1991;
const ageYokesh = now - 2018;
console.log(now-1991> now-2018);// to know all the procedence refer MDN reference
console.log(25-10-5);//left to right
let x,y;
x=y=25-10-5;
console.log(x,y);//10.,10
const averageAge= ageOormila + ageYokesh /2
console.log(ageOormila,ageYokesh,averageAge);
*/

/*//Strings and Template literals 
const firstName = "Oormila";
const job="Developer";
const birthYear= 2002;
const year = 2024;
const oormila="I'm " + firstName + ',a ' + (year - birthYear) + ' years old ' + job + ' !'; 
console.log(oormila);

console.log('String with\n\
    multiple\n\
     lines');*/

//Taking Decisions : if/else Statements const age = 13;

/*const isOldEnough = age>=18;
if(isOldEnough){
    console.log('Oormila can start driving license ')
}else{
    const yearsLeft=18-age;
    console.log('Oormila is too young.Wait another ${yearsLeft}years:)');
}
const birthYear = 1991;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);*/ //output 20

//challenge 1 and 2 
/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}*/

//Type Conversion 
/*const inputYear= '1991';
console.log(Number(inputYear), inputYear); 1991 "1991"
console.log(Number(inputYear) + 18); 2009

console.log(Number('Oormila')); Nan
console.log(typeof  NaN); Number*/

//type coercion
/*console.log('I am'+ 22 +'years old');
console.log('23'- '10' - 3);//10 acts as number in sub operator
console.log('23'+ '10' + 3);//23103 act as string in add operator
console.log('23'*'2');//acts a number in mul operator
console.log('23'/'2');//acts a  num in div operator */

//Truthy and Falsy Values
// 5 falsy values: 0,'',undefined,null,Nan
/*console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Oormila'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money=0;
if(money){
    console.log("Don't spend it all");//falsy values
}
else {
    console.log('You should get a job');
}
let height;
if(height){
    console.log('YAY! Height is defined'); //falsy value
}
else{
    console.log('Height is UNDEFINED');
}*/

//Equality operators
/*const age=18;
if(age===18) console.log('You just became an adult');*/

//"18"==18 //true because string is convert in to number
//"18"===18//false string did not change in to number

/*const favourite = prompt("What's your favourite number");
console.log(favourite);
console.log(typeof favourite);
if (favourite==22){ //==its works but === not get output becoz of correction
    console.log('cool!22 is an amazing number');
}*/

/*const favourite =  Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);
if (favourite===22){ //==its works but === not get output becoz of correction
    console.log('cool!22 is an amazing number');
}
else if(favourite===7){
    console.log('3 is also a cool number');
}
else{
    console.log('Number is not 22 or 7')
}
if(favourite!==23)console.log('why not 22');*/

//logical operators
/*const hasDriverLicencse = true;//A
const hasGoodVision = false;//B
console.log(hasDriverLicencse && hasGoodVision);//false
console.log(hasDriverLicencse || hasGoodVision);//true
console.log(!hasDriverLicencse);//false*/
/*if( hasDriverLicencse && hasGoodVision){
    console.log('Oormila is able to drive');//false
}
else{
    console.log('Someone else should drive..');
}*/

/*const isTired = true;//c
console.log(hasDriverLicencse && hasGoodVision&& isTired);//false
if( hasDriverLicencse && hasGoodVision){
    console.log('Oormila is able to drive');//false
}
else{
    console.log('Someone else should drive..');
}*/
//challenge 3

/*let scoreDolphins = (96+108+89)/3;
let scoreKoalas = (88+91+110)/3;
console.log(scoreDolphins);
console.log(scoreKoalas);
if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}
else if(scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy");
}
else (scoreKoalas==scoreDolphins){
    console.log("Both win the trophy");
}*/
/*let scoreDolphins = (96+108+89)/3;
let scoreKoalas = (88+91+110)/3;
console.log(scoreDolphins);
console.log(scoreKoalas);
if(scoreDolphins>scoreKoalas &&scoreDolphins>=scoreKoalas ){
    console.log("Dolphins win the trophy");
}
else if(scoreKoalas>scoreDolphins&&scoreKoalas>=scoreDolphins){
    console.log("Koalas win the trophy");
}
else if(scoreKoalas===scoreDolphins&&scoreDolphins>=100 && scoreKoalas >=100 )
    {
    console.log("Both win the trophy");
}
else {
    console.log('No one wins the trophy');
}*/

//The switch statement
/*const day = 'Friday';
switch(day){
    case'Monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
    case'Tuesday':
    console.log('Prepare theory videos');
    break;
    case'Wednesday':
    case'Thursday':
    console.log('Write a code');
    break;
    case'Friday':
    console.log('Revison');
    break;
    case'Saturday':
    case'Sunday':
    console.log('Enjoy the weekend');
    break;
    default:
        console.log('Not a valid Day!');
}

if(day==='Monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if(day==='Tuesday'){
    console.log('Prepare theory videos');
}else if(day==='Wednesday' || day==='Thursday'){
    console.log('Write a code');
}  else if(day==='Friday'){ 
    console.log('Revison');
}else if(day==='Saturday'|| day==='Sunday'){
    console.log('Enjoy the weekend');
}else{
    console.log('Not a Valid day');
}*/


//Statement and Experssions
/*if(23>10){
    const str='23 is bigger';//statement
}
const me='Oormila';
console.log(`I'm ${2024-2002} years old ${me}`);//experssion*/

//The Conditional (Ternary) Operator
/*const age= 22;
age>= 18 ?:
 console.log('I like to drink wine');
console.log('I like to drink water');*/

/*const drink = age >= 18? 'wine': 'water';
console.log(drink);*/

/*let drink2;
if(age >= 18){
    drink2 = 'wine';
}else {
    drink2='water';
}
console.log(drink2);*/
/*
//challenge 4
const bill= 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill *0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/

