//  greeting to friends list///
var names = ["sara", "bushra", "haya", "fatima"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
; // print names of array//
// for each message//
names.forEach(function (names) { console.log("hello, ".concat(names, " \"The metting will be held on saturday\"")); });
