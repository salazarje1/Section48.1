// add whatever parameters you deem necessary
function freqCounter(str){
    let freq = new Map(); 
    for(let val of str){
        let valCount = freq.get(val) || 0; 
        freq.set(val, valCount + 1); 
    }

    return freq; 
}

function constructNote(msg, letters) {
    if(msg.length > letters.length) return false; 
    const msgFreq = freqCounter(msg);
    const lettersFreq = freqCounter(letters); 

    for(let key of msgFreq.keys()){ 
        if(msgFreq.get(key) > lettersFreq.get(key)) return false; 
    }
    return true; 
}
