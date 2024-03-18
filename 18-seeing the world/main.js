var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// favorite places 
var fav_places = ["Islamabad", "Kashmir", "Turkey", "Gilgit", "Sawat"];
// print as orignal 
console.log("orignal order:", fav_places);
// print in alphabetic order
console.log("Alphabetical order:", __spreadArray([], fav_places, true).sort());
console.log("orignal order:", fav_places);
// reverse alphabetic order
console.log("Reverse alphabetical order:", __spreadArray([], fav_places, true).sort().reverse());
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
