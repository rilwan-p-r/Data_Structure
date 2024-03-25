function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [8,-20,6,7,1] //[-20,1,6,7,8]
console.log(quickSort(arr))

let h = ["hello world"]
let word = h[0  ].split(' ')
console.log(word);
