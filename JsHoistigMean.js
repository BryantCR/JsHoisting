// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";

// 1

console.log(hello); // logs undefined                              
var hello = 'world'; 

// 2

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle); // logs magnet
}
// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);// logs super cool
// 4
var food = 'chicken';
console.log(food); // logs chicken
eat();
function eat(){
	food = 'half-chicken';
	console.log(food); // logs half-chicken
	var food = 'gone';
}
// 5
mean(); // TypeError: mean is not a function
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// 6
console.log(genre); // logs undefined  
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre); // logs rock  
	var genre = "r&b";
	console.log(genre); // logs r&b  
}
console.log(genre);// logs disco
// 7
dojo = "san jose";
console.log(dojo); // logs san jose  
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);// logs seattle  
	var dojo = "burbank";
	console.log(dojo); // logs burbank  
}
console.log(dojo); // logs san jose  
// 8
console.log(makeDojo("Chicago", 65)); //Error
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

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ PART II ON THE NEXT FILE +++++++++++++++++++++++++++++++++++++++++++++++++ */

