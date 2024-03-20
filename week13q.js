let arr = "apple"

let firstChar = arr.charAt(0)
let lastChar = arr.charAt(arr.length-1)

let val = lastChar + arr.slice(1,-1) + firstChar
console.log(val);