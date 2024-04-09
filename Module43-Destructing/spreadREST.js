//+++++++++++++++++++++++++++++++++//
// SPREAD

const oneArray = [1,2,3,4]
const twoArray = [5,6, 7, 8]

// const threeArray = oneArray.concat(twoArray)

// console.log(threeArray);
/* [ 1, 2, 3, 4, 5, 6, 7, 8] */

//Another- 
// const threeArray = [ oneArray , twoArray]
// console.log(threeArray);    //not wokring

//Another - 
// const threeArray = [...oneArray , ...twoArray]

// console.log(threeArray);    // working

// example 

const names = [ "superman", "flash"]
const newName = ["Batman", ...names , "thor"]

console.log(newName);

// example 2

const sitename = "pwskills"

console.log([...sitename]);

//++++++++++++++++++++++++++++++++++++++++++//

// REST 

function manyArguments(){
    console.log(typeof manyArguments)
    let args = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(finalArr)
}

manyArguments(1,2,3);
manyArguments(1,2,3,4,5,6,7)

// Another- 

function manyArgumentsV2(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr)
}

manyArgumentsV2(1,2,3);

// example 

function pwskills(...values){
    return values
}
console.log(pwskills("superman","flash"))