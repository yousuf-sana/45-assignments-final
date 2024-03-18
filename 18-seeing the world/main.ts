// favorite places 
let fav_places: string[]= ["Islamabad","Kashmir", "Turkey", "Gilgit", "Sawat"];
// print as orignal 
console.log("orignal order:", fav_places);

// print in alphabetic order

console.log("Alphabetical order:", 
[...fav_places].sort());
console.log("orignal order:", fav_places);

// reverse alphabetic order
console.log("Reverse alphabetical order:",
[...fav_places].sort().reverse());

//print orignal order
console.log("orignal order:", fav_places);

//order has changed
fav_places.reverse();
console.log("reversed order:", fav_places);

//reversed the order
fav_places.reverse();
console.log("orignal order:", fav_places);

//sorted in alphabetic order

fav_places.sort();
console.log("Alphabetical order:", fav_places);
 
//sort in reversed alphabetic order
fav_places.reverse();
console.log("reversedalphabetical order:", fav_places);











