function createGreeting(name, age) {
    let yearofbirth = (2019 - age)
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearofbirth}.`
}

const greeting1 = createGreeting('Andrew', 21);
console.log(greeting1);