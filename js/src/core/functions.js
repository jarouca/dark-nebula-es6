isPrime = (num) => {
  if (num <= 1) {
    return false;
  };

  if (num <= 3) {
    return true;
  };

  let i = 2;

  while (i * i <= num) {
    if (num % i == 0) {
      return false;
    }
    i += 1
  };
  return true;
};

arraySum = (array) => {
  let result = 0;

  array.forEach((num) => {
    result += num;
  });
  return result;
};

fizzBuzz = (num) => {
  if (num == null) {
    return num
  };

  if ((num % 3 === 0) && (num % 5 === 0)) {
    return 'fizzbuzz'
  };

  if (num % 3 == 0) {
    return 'fizz'
  };

  if (num % 5 == 0) {
    return 'buzz'
  };

  if (typeof num == "number") {
    return num
  };
  return num;
};
