//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  const isEven = number % 2;

  if(isEven === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
