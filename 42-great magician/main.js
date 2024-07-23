//question# 42: Great Magicians: Start with a copy of your program from Exercise 42
var magicians = ["zardari", "Nawaz", "sharif", "shobaz"]; // program magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
showMagicians(magicians);
console.log("\t\ngreat magicians\t\n ");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians);
showMagicians(magicians); //Call show_magicians() to see that the list has actually been modified.
