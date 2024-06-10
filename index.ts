let firstname: string = "Lukas";
let age: number = 33;
let active: boolean = true;
let games: string[] = [];

games.push('Apex');
games.push('League of Legends');

console.log(games)

let firstTuple: [string, number, boolean]
firstTuple = [firstname, age, active]

console.log(firstTuple)

enum StatusTest {
    'Active1' = 'active',
    'Inactive1' = 'inactive'
}

console.log(StatusTest.Active1)

interface car {
    name: string
}

interface CarType extends car {
    model: string
}

let testCar: CarType = {
    name: '',
    model: '',
}

testCar.model = 'Ford';
testCar.name = 'Grenada'

console.log(testCar)