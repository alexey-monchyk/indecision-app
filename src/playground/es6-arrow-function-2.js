// arguments object - no longer bounde with arrow funcitons

const add = (a, b) => {
    // console.log(arguments); // doesn't work
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Alex',
    cities: ['NY','LA','KIEV'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [5, 7, 1],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());