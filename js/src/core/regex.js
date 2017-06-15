containsNumber = (string) => {
  let array = string.split('');

  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i]) == false) {
      return true
    }
  };

  return false;
};

containsRepeatingLetter = (string) => {
  let array = string.split('');

  for (var i = 0; i < array.length; i++) {
    if ((array[i] == array[i + 1]) && (isNaN(array[i]))) {
      return true;
    }
  }
  return false;
};

endsWithVowel = (string) => {
  vowels = ['a', 'e', 'i', 'o', 'u'];

  let letter = string[string.length - 1].toLowerCase();

  for (var i = 0; i < vowels.length; i++) {
    if (letter == vowels[i]) {
      return true;
    }
  }
  return false;
};

captureThreeNumbers = (string) => {
  for (var i = 0; i < string.length; i++) {
    if ((isNaN(string[i]) == false) && (isNaN(string[i + 1]) == false) &&
        (isNaN(string[i +  2]) == false)) {

      return `${string[i]}${string[i + 1]}${string[i +2]}`;
    }
  };
  return false;
};

matchesPattern = (string) => {
  if ((string.length != 12) || (string[3] != '-') || (string[7] != '-')) {
    return false;
  }

  for (var i = 0; i < string.length; i++) {
    if (isNaN(string[0]) == true) {
      return false;
    }
  }
  return true;
};

isUSD = (string) => {
//remove '$' and split to array
  newString = string.slice(1).split('');

  commaIndex = newString.indexOf(',')
//remove commas
  while (commaIndex != -1) {
    newString.splice(commaIndex, 1);
    commaIndex = newString.indexOf(',');
  }
//convert array of numbers to correctly formatted string
  currency = '$' + Number(newString.join('')).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
//if original string does not have a decimal add it along with two zeros to end of string for comparitive purposes because line 87 is going to add it to the correctly formatted string
  decimalIndex = string.indexOf('.');

  if (decimalIndex == -1) {
    string += '.00'
  }
//compare original string to correctly formatted string to generate true/false
  result = string == currency;

  return result;
};
