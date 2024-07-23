"use strict";
/* Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
Object.defineProperty(exports, "__esModule", { value: true });
/* function  make_album(ArtistName: string, AlbumName: string,Tracks?: number) {
    let album = {ArtistName, AlbumName};

    if (Tracks) {
        album["Tracks"] = Tracks;
    }
    }

return album */
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
//  function show_magicians(Names: string[]): void {
//     console.log(Names);
//  }
//  let magiciansNames: string[]=[ "Merlin", "circe", "medea", "prospero"];
// show_magicians(magiciansNames);
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
/* function show_magicians(Names: string[]) {
    
    Names.forEach(magiciansName => {
        console.log(magiciansName)

})

 }
 

 let magiciansNames: string[]=[ "Merlin", "circe", "medea", "prospero"];

show_magicians(magiciansNames);
function make_great( ma) */
function school() { console.log("Hello typescript"); }
school();
function getclass() {
    console.log("class 9");
}
getclass();
function add(x, y) {
    return x + y;
}
console.log(add(5, 6));
function subtraction(x, y) {
    return x - y;
}
console.log(subtraction(17, 3));
function multiplicatiion(x, y) {
    return x * y;
}
console.log(multiplicatiion(6, 9));
var greeting = function () {
    console.log("Hello TypeScript!");
};
greeting();
var names = function () {
    console.log("hi typescript");
};
names();
function studentId(student, school) {
    if (school === void 0) { school = "beacon home grammar school"; }
    return student + school;
}
console.log(studentId("karachi"));
function Greet(greeting, name) {
    return greeting + '!' + name + '';
}
console.log(Greet("hello", "sara"));
var sum = function (x, y) { return x + y; };
console.log(sum(3, 4));
var Print = function () { return console.log("Hello TypeScript"); };
Print();
var myNumber = 12.9456;
console.log(myNumber.toFixed());
var num1 = new Number(123);
console.log(num1);
var str1 = 'Hello';
var str2 = 'TypeScript';
console.log(str1.concat(str2));
var fruits = 'Apple, Banana, Orange';
var vegetable = 'apple';
console.log(fruits.split(vegetable));
/* enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

console.log(PrintMedia.Newsletter); // returns 5
console.log(PrintMedia.Book); // returns 15 */
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 4] = "Newspaper";
    PrintMedia[PrintMedia["Book"] = 5] = "Book";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 12] = "Magazine";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newspaper') {
        return 5;
    }
}
console.log(PrintMedia.Newspaper); // returns 5
console.log(PrintMedia.Magazine); // returns 15 */
function sayHi() {
    console.log('Hi!');
}
/* let speech: void = sayHi();
console.log(speech);
sayHi();

function keepProcessing(): never {
    while (true) {
 console.log('I always does something and never ends.')
}
};
keepProcessing(); */
for (var i_1 = 0; i_1 < 9; i_1++) {
    console.log("my name is " + i_1);
}
var i = 2;
do {
    console.log("Block statement execution no." + i);
    i++;
} while (i < 7);
var cities = ["karachi", 'hyderabad', 'faislbad'];
cities.push("sara");
console.log(cities);
cities.shift();
console.log(cities);
cities.unshift("mani");
console.log(cities);
cities.pop();
console.log(cities);
cities.sort();
console.log(cities);
console.log(cities);
var students = ["sa", "ma ", "na", "ca"];
students[2] = students[2].concat("sara");
console.log(students);
var countries;
(function (countries) {
    countries[countries["pakistan"] = 2] = "pakistan";
    countries[countries["india"] = 3] = "india";
    countries[countries["china"] = 4] = "china";
    countries[countries["afganistan"] = 5] = "afganistan";
})(countries || (countries = {}));
console.log(countries);
/* let speech: void = sayHi();
console.log(speech);
sayHi();

function keepProcessing(): never {
    while (true) {
 console.log('I always does something and never ends.')
}
};
keepProcessing(); */
(function () { console.log("runs"); })();
