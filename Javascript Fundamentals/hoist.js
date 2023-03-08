// Given - 1
console.log(hello);
var hello = 'world';
// Prediction = undefined
// var hello;
// console.log(hello);
// hello = 'world';

// Given - 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle)
}
// Prediction = magnet
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle)
// }
// needle = 'haystack'

// Given - 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Prediction = super cool
// var brendan;
// brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan)

// Given - 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Prediction = chicken half-chicken
// var food;
// eat();
// food = 'chicken'
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }

// Given - 5
mean();
console.log(food);
var mean = function() {
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food)
}
console.log(food)
// Prediction error
// var mean;
// mean();
// console.log(food)
// mean = function() {
//     var food;
//     food = 'chicken';
//     console.log(food);
//     food = 'fish';
//     console.log(food);
// }
// console.log(food)

// Given - 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// Prediction = undefined, rock, r&b, disco
// var genre;
// rewind();
// console.log(genre);
// genre = "disco";
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//Given 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo)
// Prediction = san jose, seattle, burbank, san jose
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo)

// Given - 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// Prediction: error (dojo is a const)
