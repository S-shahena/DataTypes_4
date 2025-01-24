// Primitive and Non-Primitive

// Primitive Data Types : 7

// .....................  1 Number .....................

let age = 35 ;
console.log(age + 15);

let num1 = 19;
let num2 = 34;
let num3 = num1*num2;
console.log(num3);
let num4 = 300;
let num5 = num3 - num4;
console.log(num5);

let num6 = 5;
let num7 = num5 / num6;
console.log(num7);

let num8 = 'shahena' / 5;
console.log(num8);

// .................... 2. string ......................

let fNames = 'shahena ';
let lNames = 'Akter ';
console.log(' hello,' + fNames + lNames);

let country = 'Bangladesh ';
let small = "is a small country."
let smallCountry = country + small;
console.log(smallCountry);

let world = ' in the world.';
let beautyFullCountry = `${country} ${small} this country is very beauty full ${world}`
console.log(beautyFullCountry);

// let correct = "He said, "Oops!"";
let roll = 21;
let names = ' shahena';
console.log(roll + names);

console.log('134' + 58);
//  ..................... 3. Boolean  ...................... 

let isLoggedIn = false;
console.log(isLoggedIn);

let FalseOrTrue1 = 10 > 6;
console.log(FalseOrTrue1);

let FalseOrTrue2 = 13 < 13;
console.log(FalseOrTrue2);

// ................ 4. Undefined ........................

let x;
console.log(x);

let sh;
console.log(sh);

// ..................... 5. Null .....................
 let noValue = null;
 console.log(noValue);

 noValue = '100' - 20;
 console.log(noValue);

//  ................ 6. symbol ....................
let uniqueKey1 = Symbol("id");
let uniqueKey2 = Symbol("class");
console.log(uniqueKey1);
console.log(uniqueKey2);
// .................. 7. Bigint ...................
let bigNumber = 1585664154853636554585587411n;
console.log(bigNumber);



// Non-Primitive data type

// ............... function ................

// 1.Creating a Function:
function greet(){
console.log('bangladesh');
}

// 2.Calling a Function:
greet();

// 3.Function with Parameters:

function greet1(name){
console.log('hello' + name + '!');
}

greet1('shahena');

// 4.Returning Values:

function greet2(a, b){
 return(a + b);
}

const result = greet2(4, 8);
console.log(result);

// 5.Anonymous Functions:

let multiply = function(a, b){
 return a - b;
}

console.log(multiply(350, 50));

// 6.Anonymous and Arrow Functions:

const square = (x) => x * x;
console.log(square(5));

// ........................... 

function getStore(num1 , num2, num3,){
let n1 = num1;
let n2 = num2;
let n3 = num3;
let totalN = n1 + (n2 * n3) ;
return totalN;
}
const totalNumber = getStore(5, 7, 30);
console.log(totalNumber);

//  .................. Array ..........................
//  type_1
const fruits = ['apple', 'banana', 'cherry', 'orange'];
fruits.reverse();

console.log(fruits);
// type_2
const flowers = new Array ("Rose", "Lily", "Lotus", "SunFlower");
console.log(flowers);

// type _3
const fishName = new Array();
fishName[0] = "Whale";
fishName[1] = "Hilsa";
fishName[2] = " Catla";
fishName[3] = "Mullet";
fishName[4] = "Ribbon";
fishName[5] = "Shrimp";
fishName[6] = "Lobster";
fishName[7] = "Parrotfish";
fishName[8] = "sawfish";
console.log(fishName);

// ..................  object ...................

const car = {
    names: 'BMW',
    color:'red',
    price: 100 ,
    start: function(){
      console.log('car start');
     },
    
    stop: function(){
        console.log('car stop');
    },
     math: 10 < 90,

     data: ["shrimp", " Lobster", "parrotfish"]

}

console.log(car.names);
console.log(car['color']);
console.log(car.start());
console.log(car.data);
console.log(car.data[2]);
console.log(car.math);


