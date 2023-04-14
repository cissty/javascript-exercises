const sumAll = function(int1, int2) {

    let sum = 0;
    // general condition checking type of ints
    if((typeof int1 === 'number' && typeof int2 === 'number'  ) && (int1 >= 0 && int2 >= 0)){
        if(int1 > int2){

    // looping through int1 and int 2 and adding value to sum 
            for (let i = int1; i >= int2; i--){
                sum += i;
            }
            return sum;
        
        }else if(int2 > int1){

    // loop through int 2 and int 1 and adding value to sum
            for (let i = int2; i >= int1; i--){
                sum += i;
            }
            return sum;
        }

    // general condition checking the types if it's not a positive number, returns ERROR
    }else if((typeof int1 === 'string' || typeof int2 === 'string'  ) || (int1 < 0 || int2 < 0)){
            return 'ERROR';
    }else{
            return 'ERROR';
    }
    


};

// Do not edit below this line
module.exports = sumAll;

// loop the parameters 
// create a new variable to hold the sum
// loop the numbers between int 1 and int 2
// add the looped numbers to the new variable that created
// return the sum