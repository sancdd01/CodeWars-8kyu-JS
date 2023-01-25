//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){ //counter needs to increment otherwise it will remain at 1 and always be less than or equal to number
    newArray.push(counter);
  }
  
  return newArray;
}