// function goToLounch(person){
//     if(person===5) return true;
//     console.log(person);
//     return goToLounch(person+1)
// }

// console.log("OUTCOME",goToLounch(1));
// arr.slice

// function rec(n){
//     if(n<=1)return 1
//     rec(n-1)
//     console.log(n);
//     rec(n-1)
// }
// rec(10)
function AB(n){
    if(n<=1)return 1
    return n * AB(n-1)
}
console.log(AB(5));