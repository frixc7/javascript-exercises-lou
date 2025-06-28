const findTheOldest = function(people) {
    const CURRENT_YEAR = new Date().getFullYear();

    let max = 0;
    let temp;
    let person; // current person
    let oldest;
    
    for (let i = 0; i < people.length; i++) {
        person = people[i];
        if (person.yearOfDeath) {
            temp = person.yearOfDeath - person.yearOfBirth;
        } else {
            temp = CURRENT_YEAR - person.yearOfBirth;
        }
        
        if (temp > max) {
            max = temp;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
