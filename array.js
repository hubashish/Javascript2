const myArr = [0,1,2,3,4,5]
const myHeros = ["Ram","Krishna","Hanuman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]); 

myArr.push(58)
console.log(myArr);

myArr2.push(587)
console.log(myArr2);

myHeros.push("Mahadev ji")
console.log(myHeros);

//slice ,splice

console.log("A" , myArr);

const myn1 =myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 =myArr.splice(1,5)
console.log(myn2);

