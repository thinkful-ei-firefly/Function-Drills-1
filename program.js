function createGreeting(name, age) {
    const yob = getYearOfBirth(age)
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`
}

function getYearOfBirth(age) {
    let yearofBirth = (2019 - age)
    if (age < 0) {
        throw new Error("Age can not be negative")
    }
    return yearofBirth
}

try {
const greeting1 = createGreeting('Andrew', );
console.log(greeting1);
}
catch(err) {
    console.log(`Error presented is ${err}`);
}