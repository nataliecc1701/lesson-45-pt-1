function digitFreqCount(num) {
    const digits = [0,0,0,0,0,0,0,0,0,0]
    
    for (const digit of String(num)) {
        digits[digit]++;
    }
    
    return digits;
}

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const freqs = [digitFreqCount(num1), digitFreqCount(num2)]
    const comparables = freqs.map((freq) => freq.join())
    return comparables[0] === comparables[1];
}

module.exports = sameFrequency;