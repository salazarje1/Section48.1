// add whatever parameters you deem necessary
function isSubsequence(str, phrase) {
    let first = 0; 
    let second = 0; 

    while(second < phrase.length){
        if(str[first] === phrase[second]){
            first++; 
        }
        if(first === str.length) return true; 
        second++; 
    }
    return false; 
}
