let animalDensetPer10Miles = 10;
let animalDensetPer20Miles = 50;
let animalDensetRestMiles = 100;

function animalCount(miles) {
    if (miles <= 10) {
        let count = animalDensetPer10Miles * miles;
        return count;
    }
    else if (miles <= 20) {
        let count = animalDensetPer10Miles * 10;
        let rest = miles - 10;
        let count2 = rest * animalDensetPer20Miles;
        let totalAnimalPer20Miles = count + count2;
        return totalAnimalPer20Miles;
    }
    else {
        let count = animalDensetPer10Miles * 10;
        let count2 = 10 * animalDensetPer20Miles;
        let rest2 = miles - 20;
        let count3 = rest2 * animalDensetRestMiles;
        let totalAnimalRestMiles = count + count2 + count3;
        return totalAnimalRestMiles;
    }
}

let result = animalCount(35);
console.log(result);
