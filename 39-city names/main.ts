/* // 39-City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */

function cityCountry( cityName: string, countryName: string): string { return`${cityName}, ${countryName}`;

}

const city1 = cityCountry('Lahore', 'Pakistan');
const city2= cityCountry('New York', 'USA');
const city3= cityCountry('Tokyp', 'Japan');

console.log(city1);
console.log(city2);
console.log(city3);