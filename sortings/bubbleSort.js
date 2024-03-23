function bubbleSort(arr){
    let swapped
    do{
        swapped=false
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
}while(swapped)
}
let arr = [-20,6,3,-1,0]
bubbleSort(arr)
console.log(arr);
// complexity
// O(n^2)T
// O(1)S