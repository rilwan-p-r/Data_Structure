var climbStairs = function(n) {
    let prev1 = 1
    let prev2 = 1

    for(let i=0;i<n;i++){
        let temp = prev1
        prev1 = prev1 + prev2
        prev2 = temp
    }
    return prev2
};

console.log(climbStairs(3));