    let removal = 3;
    let myArray = ([1, 2, 3, 4], 3); 

    
    function removeFromArray(arr, val1, val2, val3, val4){
        
        let removal = arr.filter(function(x){

            return  (x !== val1 && x !== val2) && (x !== val3 && x !== val4);
        });
        return removal;
    }

// Do not edit below this line
module.exports = removeFromArray;
