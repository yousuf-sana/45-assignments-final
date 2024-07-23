/* Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */

import { start } from "repl";

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


function school(){ console.log("Hello typescript")}
school();

function getclass(){ 
    console.log( "class 9")
}
getclass();

function add(x: number, y: number):number{
    return x+y;
}
console.log(add(5,6));

function subtraction( x:number, y : number):number {
    return x-y;
}
console.log(subtraction(17,3));

function multiplicatiion( x:number, y: number): number {
    return x*y

}

console.log (multiplicatiion(6,9));


let greeting = function() {
    console.log("Hello TypeScript!");
};

greeting();

let names =function(){
    console.log ( "hi typescript");
};
names();

function studentId( student: string,  school: string="beacon home grammar school" ): string
{
    return student+ school;

}
console.log(studentId ("karachi"));

function Greet(greeting: string, name: string ) : string {
    return greeting + '!' + name + '';


}
console.log(Greet("hello", "sara"));


let sum = (x: number, y: number) => x + y;

console.log(sum(3, 4));

let Print = () => console.log("Hello TypeScript");

Print();


let myNumber: number = 12.9456;
console.log(myNumber.toFixed());


let num1 = new Number(123);
console.log(num1)

let str1: string = 'Hello';
let str2: string = 'TypeScript';
console.log(str1.concat(str2));


let fruits: string = 'Apple, Banana, Orange';
let vegetable: string = 'apple';

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
  

enum PrintMedia {
    Newspaper=4,
    Book,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newspaper * 3

}
function getPrintMediaCode(mediaName: string):any {
    if (mediaName === 'newspaper') {
        return 5;
    }
}
console.log(PrintMedia.Newspaper); // returns 5
console.log(PrintMedia.Magazine); // returns 15 */

function sayHi():void { 
    console.log('Hi!')
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

for (let i = 0;i < 9; i++) 
    {
console.log ("my name is "+i);
}




let i: number = 2;
do {
    console.log( "Block statement execution no." + i )
    i++;
} while ( i < 7)

let cities:string[]= ["karachi", 'hyderabad', 'faislbad'];

 cities.push("sara");
console.log(cities);

cities.shift();
console.log(cities);
cities.unshift("mani");
console.log(cities)

cities.pop();
console.log(cities)
cities.sort();
console.log(cities)

console.log(cities)
let students: string[]= ["sa", "ma ", "na", "ca"];

students[2]= students[2].concat("sara");
console.log(students);

enum countries{ pakistan=2, india , china, afganistan

}
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

(function(){console.log("runs");})


();

/* Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
 */

function make_album(artistName: string, 
    
)