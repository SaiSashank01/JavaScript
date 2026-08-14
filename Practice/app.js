function addFirstandSecond() {

}
function printPoem() {
    console.log("Twinkle twinkle Little star ");
    console.log("How i wonder ");

}

printPoem();

let rand = Math.floor(Math.random() * 6) + 1;

console.log(rand);

//Arguments in the Js

function printArguments(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printArguments('Sasi', 20);


//Printing the Tables with the using of the Logic

function printTables(n) {
    for (let i = n; i <= n * 10; i += n) {

        console.log(i);
    }
}

printTables(4);



//printing N Number 
function getSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
   return sum;
}