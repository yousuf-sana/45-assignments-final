// invited guest
var guests = ["sana", "sara", "aliza ", "fari"];
guests.forEach(function (guests) { console.log("Dear ".concat(guests, ",would you like to join for dinner?")); });
console.log('          ');
//  changing in guest list//
var unabletoattend = "sana";
console.log("".concat(unabletoattend, " can't make it to dinner."));
console.log('          ');
//replace the guest//
var NewGuest = "hina";
guests[guests.indexOf(unabletoattend)] = NewGuest;
console.log('          ');
//New Invitation
guests.forEach(function (guest) { console.log("Dear ".concat(guest, ", would you like to join me for dinner?")); });
