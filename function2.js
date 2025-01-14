// ...  is dot dot ko hi rest operators bolte hai 

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,548,657,457))

const user = {
    username: "Nagesh",
    price:999
}
function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');

}
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,500,455,666]

function returnSecondValue(getArray){
    return getArray[1]

}
