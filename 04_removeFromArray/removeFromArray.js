const removeFromArray = function(array, ...args) {
    
    for(const arg of args){
        while(array.includes(arg)){
            array.splice(array.indexOf(arg), 1);
        }
    }
    //else{
    //     while(array.indexOf(args) + 1){
    
    //         array.splice(array.indexOf(args), 1);
    //     }
    // }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
