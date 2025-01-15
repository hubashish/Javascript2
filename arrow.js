// arrow function

const user = {
    username: "Nagesh",
    price: 999,

    welcomeMessage: function(){
        console.log('${this.username}, welcome to website');
    }
}

user.welcomeMessage()

function lassi(){
    let username ="Nagesh"
    console.log(this.username);
}

const lassi = function(){
    let username ="Nagesh"
    console.log(this.username);
}

// lassi()

const addTwo = (num1, num2) => {
    return num1+num2
}

// const addTwo = (num1, num2) => ( num1  + num2)

// agar {} curly bracket use karte hai to return likhna hoga agar () normal braces use karenge to return likhne ki jarurat nahi hai. 

    console.log(addTwo(3,4))
