let selectionSort = (arr)=>{
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}


console.log(selectionSort([-20,30,22,10,5]));

var plusOne = function(digits) {
    let carry = 1; 
    
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        
        if (digits[i] > 9) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0; 
            break; 
        }
    }
    
    if (carry) {
        digits.unshift(1); 
    }
    
    return digits;
};

let didgits = [1,2,3]
console.log(plusOne(didgits));