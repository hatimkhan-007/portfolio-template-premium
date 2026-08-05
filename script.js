for(let i = 1; i <= 20; i++){
    console.log(i);
}
for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

for(let i = 1; i <= 20; i++){
    if(i == 10){
        break;
    }
    console.log(i);
}


for(let i = 1; i <= 20; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

let cities = [
    "lahore",
    "islamabad",
    "karachi",
    "narowal",
    "washingtan"
];

for(let city of cities){
    console.log(city);
}

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2025
};

for(let key in car){
    console.log(key, car[key]);
}

function multiply(a, b){
    return a*b;
}

let result = multiply(2,2);
console.log(result)

function iseven(number){
    if(number % 2 == 0){
        return console.log(true);
    } else {
        return console.log(false);
    }
}

iseven(3);

function findlargest(a, b){
    if(a > b){
        return console.log(a + " is largest");
    } else {
        return console.log(b + " is largest");
    }
}

findlargest(4, 5);

function calculateArea(heigth, width){
    return console.log("Area of the rectangle is " + heigth * width);
}

calculateArea(12, 12);


function fullName(firstname, lastname){
    return console.log(firstname + " " + lastname);
}

fullName("uzair", "khan");

let fruits = [
    "Apple",
    "Mango",
    "Banana",
    "Orange"
];

let [one, two, three, four] = fruits;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

let [_one,,_two,_three] = fruits;
console.log(_one);
console.log(_two);
console.log(_three);

let laptop = {
    brand: "HP",
    model: "EliteBook",
    price: 67000
};

let { brand, model, price } = laptop;
console.log(brand);
console.log(model);
console.log(price);

let {brand: company } = laptop;
console.log(company);

let {
    color = "black"
} = laptop;
console.log(color);

let numbers = [1, 2, 3];
let [...others] = numbers;
console.log(others);

let a = [1, 2];
let b = [3, 4];

let ab = [
    ...a,
    ...b
];
console.log(ab);

let person = {
    name: "Ali",
    age: 22
};

let {...copy} = person;
console.log(copy);

let updated =  {
    ...person,
    age: 23
};
console.log(updated);

function multiply(...numbers){
    mul = 1;
    for(let number of numbers){
        mul *= number;
    }
    return mul;
}

console.log(multiply(1,2,3,4,5,6));

