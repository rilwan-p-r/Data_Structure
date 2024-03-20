function recursiceFabinacci(n) {
    if (n < 2){
        return n
    }
    return recursiceFabinacci(n-1) + recursiceFabinacci(n-2)
}
console.log(recursiceFabinacci(5));
console.log(recursiceFabinacci(7));
console.log(recursiceFabinacci(6));