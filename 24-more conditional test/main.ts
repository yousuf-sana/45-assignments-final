// 24-More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings



// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array//


let city: string ="karachi";
let age : number=20;



//test for equality and inequality with strings

console.log(" Testing equality with strings");
console.log("is city == 'karachi',I  predict true")  //true
console.log (city=='karachi'); 

console.log("is city != 'karachi',I  predict false") ;///  false
console.log( city != 'karachi');

//test using the lower case
console.log ("testing using the lower case");
console.log("is city.tolowercase == 'karachi', I predict true");
console.log(city.toLowerCase ()=='karachi')

//test using upper case
console.log ("testing using the upper case");
console.log("is city.touppercase == 'karachi', I predict false");
console.log(city.toUpperCase ()=='karachi')



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//Numerical tests involving equality
console.log("is age== 20,I predict true ");
console.log(age == 20);

console.log("is age== 15,I predict false ");
console.log(age == 15);

// • Numerical tests involving  inequality
console.log( "is age !=34, i predict true");
console.log(age!= 34);

console.log( "is age !=20, i predict false");
console.log(age!= 20);

// • Numerical tests involving greater than

console.log( "is age > 17, i predict true");
console.log(age > 17);

console.log( "is age >23, i predict false");
console.log(age > 23);
    
// • Numerical tests involving less than
console.log( "is age < 17 , i predict false");
console.log(age < 17);

console.log( "is age < 21, i predict true");
console.log(age < 21);


// • Numerical tests involving  greater than or equal to

console.log( "is age >= 20, i predict true"),
console.log(age>= 20)

console.log( "is age >= 40, i predict false"),
console.log(age >= 40)

// • Numerical tests involving  less than or equal to
console.log("is age <= 40, i predict true"),
console.log( age<=40)

console.log("is age <= 15, i predict false"),
console.log( age<=15)

// • Tests using "and" operators
 
console.log("is  19 < age > 15, I predict true"),
console.log(  19 <age  && age > 15)

console.log("is 25< age > 35, i predict false "),
console.log(25 <age && age> 35 )

// • Tests using  "or" operators

console.log( "is  age> 19 or  age < 67, i predict true"),
console.log(age > 19 || age <67 )

console.log( "is  age> 57 or  age < 15, i predict false "),
console.log(age > 57 || age <15 )


// • Test whether an item is in a array
let friends: string[] = ["sana", "asma" , "sara"];

let colours: string[] = [ "red", "blue", "green", "black", "pink"];

 console.log("is 'sana' in friends, I predict true" );
 console.log(friends.includes("sana"))

 console.log("is 'pink' in colours, I predict true" );
 console.log(colours.includes("pink"))


 // • Test whether an item is not in a array//

 console.log("is 'tehmina' in friends, I predict false" );
 console.log(friends.includes("Tehmina"))

 console.log("is 'white' in colours, I predict false" );
 console.log(colours.includes("white"))
