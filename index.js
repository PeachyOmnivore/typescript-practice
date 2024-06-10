var firstname = "Lukas";
var age = 33;
var active = true;
var games = [];
games.push('Apex');
games.push('League of Legends');
console.log(games);
var firstTuple;
firstTuple = [firstname, age, active];
console.log(firstTuple);
var StatusTest;
(function (StatusTest) {
    StatusTest["Active1"] = "active";
    StatusTest["Inactive1"] = "inactive";
})(StatusTest || (StatusTest = {}));
console.log(StatusTest.Active1);
var testCar = {
    name: '',
    model: '',
};
testCar.model = 'Ford';
testCar.name = 'Grenada';
console.log(testCar);
