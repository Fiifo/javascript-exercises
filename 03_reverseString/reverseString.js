const reverseString = function(string) {
    let reverse = "", part;
    let letters = string.length;
    for(let i= 0; i < string.length; i++){
        part = string.slice(letters - 1, letters);
        reverse = reverse + part;
        letters--;
    }
    return reverse;
   
};

// Do not edit below this line
module.exports = reverseString;
