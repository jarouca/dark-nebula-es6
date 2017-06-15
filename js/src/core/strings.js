reduceString = (str, amount) => {
  count = (arr, item, index) => {
    let i = 1;
      while (item === arr[index + 1]) {
        i += 1;
        index += 1;
      }
    return i;
  };

  array = str.split('');

  for (let i = 0; i < array.length; i++) {
    while (count(array, array[i], i) > amount) {
      array.splice(i, 1);
    }
  };

  return array.join('');
};

reverseString = (str) => {
  return str.split('').reverse().join('');
};
  
