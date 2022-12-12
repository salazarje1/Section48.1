// add whatever parameters you deem necessary
function averagePair(nums, avg) {
    let left = 0; 
    let right = nums.length - 1; 

    while (left < right) {
        const pairAvg = (nums[left] + nums[right] / 2); 
        if(pairAvg === avg){
            return true; 
        } else if (pairAvg > avg){
            right--; 
        } else {
            left++;
        }
    }
    return false; 
}   
