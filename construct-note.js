function freqCount(str) {
    const counter = new Map();
    
    for (const char of str) {
        let valCount = counter.get(char) || 0;
        counter.set(char, valCount + 1);
    }
    
    return counter;
}

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if (msg.length > letters.length) return false;
    
    const msgFreq = freqCount (msg);
    const lettersFreq = freqCount(letters);
    
    for (const key of msgFreq.keys()) {
        if (!lettersFreq.has(key)) return false;
        if (msgFreq.get(key) > lettersFreq.get(key)) return false;
    }
    
    return true;
}