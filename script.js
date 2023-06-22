
console.log("****************************** 1 **************************");
// ************  Given

console.log(hello);
var hello = 'world';

// ************ After hoisting
// var hello;
// console.log(hello);  // log undefined
// hello = 'world';


console.log("****************************** 2 **************************");
// ************  Given

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}


// ************ After hoisting
// var neddle;
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test(); // log magnet



console.log("****************************** 3 **************************");
// ************  Given
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// ************ After hoisting
// var brendan;
// brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);  
// }
// console.log(brendan); // logs super cool



console.log("****************************** 4 **************************");
// ************  Given
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}



// ************ After hoisting
// var food;
// food = 'chicken';
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';

// }
// console.log(food); // log chicken
// eat(); // log half-chicken



console.log("****************************** 5 **************************");
// ************  Given
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);



// ************ After hoisting
// var mean;
// var mean = function() {
//     var food;
//         food = "chicken";
//         console.log(food);
//         food = "fish";
//         console.log(food);
//     }  // log error
// mean(); 
// console.log(food);  
// console.log(food);  



console.log("****************************** 6 **************************");
// ************  Given
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



// ************ After hoisting
// var genre;node script
// function rewind() {
// var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // log undefined
// genre = "disco";
// rewind();  // log rock , log r&b
// console.log(genre);  // log disco

console.log("****************************** 7 **************************");
// ************  Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// ************ After hoisting
// var dojo;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);  //log san jose
// learn();   // log seattle, log burbank
// console.log(dojo); //log san jose


console.log("****************************** 8 **************************");
// ************  Given

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// ************ After hoisting

// function makeDojo(name, students){
//     const dojo;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";  // error
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));  


