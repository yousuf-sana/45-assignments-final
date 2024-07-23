// question43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let Magicians: string[]= ["tara", "sara","bahlo" ]; // Make array
function ShowMagicians(Magicians: string[]): string []{
    return Magicians;
}
function MakeGreat(Magicians: string[]): string[] {

    let GreatMagicians: string[] =[]; // show  the great with every  name
    Magicians.forEach(Magician => {
        GreatMagicians.push( `${Magician} the Great`);

    });
return GreatMagicians;
}

let GreatMagicians = MakeGreat(Magicians.slice()); //modify Magicians array

console.log("Orignal Magicians:");
console.log (ShowMagicians(Magicians)); //show orignal name;
console.log("Graet Magicians:");
console.log (ShowMagicians(GreatMagicians)); //show modified names
