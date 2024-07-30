const repeatString = function(string, times) {
    if(times < 0){
        return "ERROR"
    }
    let newstring = string.repeat(times);

    
    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
