/*'use strict';
//strict mode forbids us to certain things and it shows visible errors     
 // make us visible errors
 let hasDriversLicense = false;
 const passTest = true;

 if(passTest) hasDriversLicense = true;
 if(hasDriversLicense) console.log('I can drive :D');

 //can't use private mode and if agian*/

 //Java script functions
// Function is a piece of code we can use over and over again
/*function logger(){
    console.log('my name is Oormila');
}
//calling,Running, Invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);//5,0
console.log(appleJuice);//Juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2,4);//2 4
console.log(appleOrangeJuice);//Juice with 2 apples and 4 oranges.
 const num = Number('23');*/

 //Function Declarations vs. Expressions 
 /*function calcAge1(birthYeah){
    return 2037 - birthYeah;
 }
//Function expression
const age1= calcAge1(1923);
console.log(age1);//114
 const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
 }
const age2 = calcAge2(1998);
console.log(age2)//39
console.log(age1,age2);//114,39*/

//normal function expression)
const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
}
//Arrow function
const calcAge3 = birthYeah => 2037- birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65- age ;
    //return retirement;
    return`${firstName} retires in ${ retirement} years`;
}
console.log(yearUntilRetirement(1991,'Oormila'));
console.log(yearUntilRetirement(1980,'Yokesh'));

