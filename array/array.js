// let arr = [3,4,2]
// console.log(arr);
// arr.unshift(7)
// console.log(arr);
// for(const values of arr){
//     console.log(values);
// }
// arr.shift()
// console.log(arr);
// arr.pop()
// console.log(arr);

let word = ["hello","world","golbal"]
let newVal = word.map(str=>str.charAt(0).toUpperCase() + str.slice(1))
console.log(newVal);
let arr = [4,3,2,7,8,8]
let uni = Array.from(new Set(arr))
console.log(uni);
let srt = uni.sort((a,b)=>b-a)
console.log(srt);
if(srt.length>=2){
    console.log(srt[1]);
}else{
    console.log("-1");
}


function secondLargest(arr1){
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]>largest){
            secondLargest = largest
            largest = arr1[i]
        }else if(arr1[i] != largest && arr1[i] > secondLargest){
            secondLargest = arr1[i]
        }
       
    }
    return secondLargest
}
    console.log(secondLargest([4,3,21,7,82,8,9,22,33]));