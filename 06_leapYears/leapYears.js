const leapYears = givenNumber => {
    if(givenNumber % 4 === 0 && givenNumber % 400 === 0) return true
    else if(givenNumber % 4 === 0 && givenNumber % 100 === 0) return false;
    else if(givenNumber % 4 === 0) return true
    else if(givenNumber % 400 === 0) return true;
    else if(givenNumber / 100) return false;
    

};

// Do not edit below this line
module.exports = leapYears;

//   it'll be a boolean and return if can divide 'true' if not 'false'
//                          -------
// Divisible years can divide to 4 but can't divide to 100
// Divisible years can divide to 400  override that it's divisible 
//                                    even though it  can't divide to 100

//Create a function that determines whether or not a given year is a leap year.
