//controlflow
// if
// operator

// normal check

// const isUserlogggedIn =true

// if(2 == "2"){
//     console.log("executed");
// }

// strictly check
// const isUserlogggedIn =true

// if(5 === "5"){
//     console.log("executed");
// }

// const isUserlogggedIn =true
// const temperature = 41

// if(temperature === 58){
//     console.log("less tham 50");
// }
// else{

// console.log("temeprature is greater than 50");
// }

// console.log("Execute");


// const score =200

// if (score> 100) {
//     let power = "fly"
//     console.log('User power: ${power}');

// }
// console.log('User power: ${power}');

// // shorthand notation

//  const balance = 1000
// if (balance > 500) console.log("test"),
// console.log("test2")


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");

// } else if (balance < 900 ){
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
// }

const isUserloggedIn  = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course") ;
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}