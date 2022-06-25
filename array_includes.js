const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement) return true;
  return false;
}

//Hard-coding, there is a '.includes' method already
