function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

let arr = [20,-6,8,4,-2]
console.log(mergeSort(arr));
// complexity
// Big-O = O(nlogn)T,S