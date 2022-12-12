// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0; 
    let right = nums.length - 1; 

    while(left < right){
        if(nums[left] < 0 && nums[right] > 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]; 
        } else if(nums[left] > 0) {
            left++; 
        } else {
            right--; 
        }
    }
    return nums; 
}
