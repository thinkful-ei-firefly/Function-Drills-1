function createGreeting(name, age) {
    const yob = getYearOfBirth(age)
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`
}

function getYearOfBirth(age) {
    let YearofBirth = (2019 - age)
    return YearofBirth
}

const greeting1 = createGreeting('Andrew', 21);
console.log(greeting1);