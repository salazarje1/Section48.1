// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let first = 0; 
    let second = 1; 
    let count = 0; 

    while(first < arr.length - 1){
        const sum = arr[first] + arr[second]; 
        if(sum === num){
            count++;
            first++; 
            second = first + 1;  
        } else if(second >= arr.length){
            first++; 
            second = first + 1; 
        } else {
            second++; 
        }
    }

    return count; 
}
