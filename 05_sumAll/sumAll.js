const sumAll = function(n1, n2) {
    let result = 0;
    if(n1 < 0 || n2 < 0 || !(Number.isInteger(n1)) || !(Number.isInteger(n2))){
        return "ERROR"
    }
    if(n2 < n1){
        for(let i = n2; i<= n1; i++){
            result += i;
        }
    }else{
    for(let i = n1; i <= n2; i++){
        result += i;
    }}
    return result;
};

// Do not edit below this line
module.exports = sumAll;
