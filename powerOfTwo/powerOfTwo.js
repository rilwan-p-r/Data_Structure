function isPower(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n = n/2
    }
    return true
}
console.log(isPower(4));
console.log(isPower(8));
// Big-O = O(logn)