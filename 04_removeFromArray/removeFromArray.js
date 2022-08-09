const removeFromArray = function(array, ...deleteArray) {
    //store array
    
    //remaining arguments should be deleted
    //store list of values to be removed
    //store rest of arguments as another array
    
   
    
    //declare new array to be returned
    const returnedArray = [];
    for (let i=0; i<array.length;i++){
    //if element not in list to be deleted, store
      if (!deleteArray.includes(array[i])) {
        returnedArray.push(array[i]);


      }
  
    }
      //return array
      return returnedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
