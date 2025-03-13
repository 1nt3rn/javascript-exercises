const findTheOldest = function(people) {
    let calcAge = (person) => person.yearOfDeath === undefined ?
        new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
    let oldest = people[0];
    for (let i = 1; i < people.length; ++i) 
        if (calcAge(oldest) < calcAge(people[i]))
            oldest = people[i];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
