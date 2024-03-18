// invited guest


let guests: string[]= ["sana", "sara", "aliza ", "fari"];
guests.forEach(guests=> { console.log(`Dear ${ guests},would you like to join for dinner?`);});
  
console.log('          ');

//  changing in guest list//
 let unabletoattend="sana"
 console.log(`${ unabletoattend} can't make it to dinner.`);


 console.log('          ');



 //replace the guest//

 let NewGuest ="hina"; guests[ guests.indexOf(unabletoattend)]=NewGuest;

console.log('          ');


//New Invitation

guests.forEach(guest=> { console.log( `Dear ${ guest}, would you like to join me for dinner?`) ;});


 