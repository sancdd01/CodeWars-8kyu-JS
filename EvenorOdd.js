/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers*/ 

function evenOrOdd(number) {
  let isEven = number % 2;

  if(isEven === 0) {
    return "Even";
  }
  return "Odd";
}