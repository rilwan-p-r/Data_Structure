let nums = [6,5,4,3,2,6,8,6,9,7,6]
console.log(nums.length);
let target = 6;
let left = 0;
let right = nums.length - 1;
while (left<right) {
    if(nums[left] !== target){
        left++;
    }
    else if(nums[right] === target){
        right--;
    }
    else{
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp;
        left++
        right-- 
    }
}
console.log(nums);
// O(nums)t
// O(1)s