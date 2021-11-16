/* PART II, ORDERED AT MY WAY */

// 2

function test(){
    var needle;
	needle = 'magnet';
	console.log(needle); // logs magnet
}
var needle;
needle = 'haystack';
console.log(needle); // logs haystack
test();

// 5

function mean() {
	food = "chicken";
	console.log(food); // logs chicken
	var food = "fish";
	console.log(food); // logs fish
}
mean();

// 6

var genre = "disco";
function rewind() {
	genre = "rock";
	console.log(genre); // logs rock  
	var genre = "r&b";
	console.log(genre); // logs r&b  
}
console.log(genre);// logs disco
console.log(genre); // logs disco 
rewind();

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
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

