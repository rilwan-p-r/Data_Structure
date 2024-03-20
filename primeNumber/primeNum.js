function prime(n){
    if(n<2){
        return false
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(prime(2));
console.log(prime(5));
console.log(prime(3));
console.log(prime(4));
// big-O = O(n)