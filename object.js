// singleton
//object.create


// Object.Literals

const JsUser = {
    name: "Nagesh",
    age: 21,
    location: "mumbai",
    email: "nageshgiri602@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Mobady","Saturday"]
}

// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello JS user ,");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());