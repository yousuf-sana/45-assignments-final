// previous guest/

 let guests: string[]= [ "Quaid-e-Azam", "Allama Iqbal", "Liaquat ALi khan",]
  
  console.log("hurrah, we  arranged a bigger table");

  // Adding more guest
  guests.unshift("Fatima jinnah.com", "Bi- amma"); // add at begning
  guests.splice(guests.length/2,0,"rana ");  // add at middle
guests.push("sir  syed");// at the end

guests.forEach(guests=> { console.log(`Dear ${ guests}, would you like to join me for dinner?`)});



