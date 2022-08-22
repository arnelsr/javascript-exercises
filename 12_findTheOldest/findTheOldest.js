const findTheOldest = function(peopleArray) {
    //initial value age as 0
    const initialAge = 0;
    //current year
    const day = new Date();
    const year = day.getFullYear();
    let oldest = [];
    
    
    
    
    peopleArray.reduce((previousMaxAge,currentPerson)=>{
        //current year if no year of death
        let yearOfDeath = 0;
        if (!currentPerson['yearOfDeath']) {
            yearOfDeath= year;
        }else{
            yearOfDeath = currentPerson['yearOfDeath'];

        }
        
        const currentMaxAge = yearOfDeath - currentPerson['yearOfBirth']
        if (currentMaxAge>previousMaxAge) {
            previousMaxAge=currentMaxAge;
            oldest=currentPerson;

        }
        return previousMaxAge;

    },initialAge);
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
