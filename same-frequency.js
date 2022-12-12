// freqCounter with map
function freqCounter(num) {
    let freq = new Map();

    for (let val of num){
        let valCount = freq.get(val) || 0; 
        freq.set(val, valCount + 1); 
    }

    return freq;
}

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Str = num1.toString(); 
    let num2Str = num2.toString();
    if(num1Str.length !== num2Str.length) return false; 

    const num1Freq = freqCounter(num1Str);
    const num2Freq = freqCounter(num2Str); 

    for(let key of num1Freq.keys()) {
        if(num1Freq.get(key) !== num2Freq.get(key)) return false; 
    }

    return true; 
}
