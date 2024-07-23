//34-Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let  pizzas:string[]= ["fajita", "paproni", "double cheese"];

for( let pizza of pizzas){
    console.log(`\nI love ${pizza}\n`);
}
 console.log("I like pizza because it's the ultimate comfort food. The combination of gooey cheese, tangy tomato sauce, and endless topping possibilities always hits the spot. Whether it's a classic pepperoni or something more adventurous like barbecue chicken or veggie-loaded, pizza never fails to satisfy. The crispy crust adds just the right amount of texture to each delicious bite.")