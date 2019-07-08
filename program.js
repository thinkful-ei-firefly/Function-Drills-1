function createGreeting(name, age) {
    if ((name === undefined) || (age === undefined) )
    {
        throw new Error("Arguements not defined")
    }
    else if (typeof name !== "string") {
        throw new TypeError("Name is not a string")
    }
    else if (typeof age !== 'number') {
        throw new TypeError("Age is Not a Number")
    }
    else if (age < 0) {
        throw new Error("Age can not be negative")
    }
    else {
        const yob = getYearOfBirth(age)
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`}
}

function getYearOfBirth(age) {
    let yearofBirth = (2019 - age)
    return yearofBirth
}

let myName = "Andrew";
let myAge = 21;

try {
const greeting1 = createGreeting(myName, myAge);
console.log(greeting1);
}
catch(err) {
    console.log(err.message);
}