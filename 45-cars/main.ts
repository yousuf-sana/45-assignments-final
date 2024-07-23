//question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// create function for a car

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function makeCar(manufacturer: string, model: string, ...args: [string, any][]): Car {
    let car: Car = {
        manufacturer,
        model
    };
    
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    
    return car;
}

// Call the function with required information and two other name-value pairs

console.log(makeCar('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true]));

console.log(makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));


