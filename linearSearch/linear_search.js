function binary(arr,target){
    let left = 0
    let right = arr.length-1

    while(left<=right){
        let middle = Math.floor((left+right)/2)

        if(arr[middle]===target){
            return middle
        }
        if(target<arr[middle]){
            right = middle-1
        }
        left = middle+1

    }
    return -1
}

console.log(binary([3,4,5,6,7,8],5));
console.log(binary([3,4,5,6,7,8],11));
console.log(binary([3,4,5,6,7,8],7));