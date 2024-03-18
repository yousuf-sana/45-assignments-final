// previous guest/
var guests = ["Quaid-e-Azam", "Allama Iqbal", "Liaquat ALi khan",];
console.log("hurrah, we  arranged a bigger table");
// Adding more guest
guests.unshift("Fatima jinnah.com", "Bi- amma"); // add at begning
guests.splice(guests.length / 2, 0, "rana "); // add at middle
guests.push("sir  syed"); // at the end
guests.forEach(function (guests) { console.log("Dear ".concat(guests, ", would you like to join me for dinner?")); });
//  q no 17    shrinking guests list
console.log(" als!  i can invite only two people for dinner");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log('                ');
    //remove guests
    console.log("sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) { console.log("Dear ".concat(guest, "; you are still invited to dinner.")); });
//show an empty list
guests.splice(0, guests.length);
console.log(guests);
