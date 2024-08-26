// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    const retObj = {}
    for (let i = 0; i < keys.length; i++) {
        if (i >= vals.length) retObj[keys[i]] = null;
        else retObj[keys[i]] = vals[i];
    }
    return retObj;
}

module.exports = twoArrayObject