//localscope and globalscope
// {} curly braces ko scope kahte hai

// let a = 10
// const b = 20
// var c = 40

if(true){
    let a = 10
    const b = 20
    console.log("INNER: " , a);
}
console.log(a);
// console.log(b);
// console.log(c);
