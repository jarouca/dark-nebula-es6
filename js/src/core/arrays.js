removeWithoutCopy = (arr, item) => {
  let i = 0;

  while (i < arr.length) {
    while (arr[i] == item) {
      arr.splice(i, 1)
    }

    i++;
  }
  return arr
};

append = (arr, item) => {
  arr.push(item);

  return arr;
};

truncate = (arr) => {
  arr.pop();

  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);

  return arr;
};

curtail = (arr) => {
  arr.shift();

  return arr;
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);

  return arr;
}

count = (arr, item) => {
  match = (value) => {
    return value == item
  }

  let newArray = arr.filter(match);

  return newArray.length;
};

duplicates = (arr) => {
  let result = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if ((count(arr, arr[i]) > 1) && (count(result, arr[i]) == 0)) {
      result.push(arr[i]);
    }
  };

  return result;
};

// duplicates = (arr) => {

  // let newArray = arr.slice().sort();
  //
  // let dups = [];
  // for (var i = 0; i < newArray.length - 1; i++) {
  //   if ((newArray[i] == newArray[i + 1]) && (dups.indexOf(newArray[i]) == -1)) {
  //     dups.push(newArray[i]);
  //   }
  //  }
  //  return dups;
// };
square = (arr) => {
  let sqr = (num) => {
    return num * num
  };

  return arr.map(sqr);
};

findAllOccurrences = (arr, item) => {
  let occurences = [];

  for (var i = 0; i < arr.length -1; i++) {
    occurence = arr.indexOf(item, i);

    if ((occurence != -1) && (occurences.indexOf(occurence) == -1)) {
      occurences.push(occurence);
    }
  }

  return occurences;
};
