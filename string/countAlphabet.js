function countAlphabet(value){
    let result =""
    let count =1
    for(let i=0; i<value.length; i++){
        if(value[i]===value[i+1]){
            count++
        }else{
            result += count + value[i]
            count = 1
        }
    }
    return result 
}
let str = "AAABBC"
let output = countAlphabet(str)
console.log(output);
let rev = str.split('').reverse().join('')
console.log(rev);