//for of 

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}
const greetings = "Hello Nagesh"
for (const greet of greetings){
    console.log('Each char is $(greet)')
}

//Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('Sr', "SriLanka")
map.set('Np', "Nepal")

console.log(map);

for (const [key, value] of map) {
    console.log(key , ':-', value);
} 


