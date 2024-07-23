// question43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var Magicians = ["tara", "sara", "bahlo"]; // Make array
function ShowMagicians(Magicians) {
    return Magicians;
}
function MakeGreat(Magicians) {
    var GreatMagicians = []; // show  the great with every  name
    Magicians.forEach(function (Magician) {
        GreatMagicians.push("".concat(Magician, " the Great"));
    });
    return GreatMagicians;
}
var GreatMagicians = MakeGreat(Magicians.slice()); //modify Magicians array
console.log("Orignal Magicians:");
console.log(ShowMagicians(Magicians)); //show orignal name;
console.log("Graet Magicians:");
console.log(ShowMagicians(GreatMagicians)); //show modified names
