"use strict";
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`making a ${size} t-shirt with the message "${message}" ptrinted on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "dive  into coding");
