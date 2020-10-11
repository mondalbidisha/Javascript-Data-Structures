// Common Recursion Problem Solutions - 

function factorial(num) {
  if(num == 0) return 0;
  if(num <= 1) return 1;
  return num * factorial(num - 1); 
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))


function productOfArray(arr) {
  if(arr.length == 0) {
    return 1;
  }  
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,4]))

function RecursiveRange(num) {
  if(num == 0) return 0;
  if(num == 1) return 1;
  return num + RecursiveRange(num - 1);
}

console.log(RecursiveRange(5))

function fibonacci(n) {
  if(n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10))

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false
}

console.log(isPalindrome("aabbb"))

function flattenArray(inputArray) {
  let resultArray = [];
  for(var i = 0; i < inputArray.length; i++) {
    if(Array.isArray(inputArray[i])) {
      resultArray = resultArray.concat(flattenArray(inputArray[i]));
    } else {
      resultArray.push(inputArray[i]);
    }
  }
  return resultArray;
}

console.log(flattenArray([1, [2, [3, 4], [[5]]]]))

function capitalizeFirst(str) {
  let resultArray = [], first;

  if(str.length == 0) {
    return resultArray;
  }

  first = str[0].split("")[0].toUpperCase().concat(str[0].slice(1));
  resultArray.push(first);
  return resultArray.concat(capitalizeFirst(str.slice(1)));
}

console.log(capitalizeFirst(['cat', 'dog', 'goat', 'bird']));

function nestedEvenSum(obj, result = 0) {
  for(key in obj) {
    if(typeof obj[key] === 'object') {
      result += nestedEvenSum(obj[key]);
    } else {
      if(obj[key] % 2 === 0) {
        result = result + obj[key]
      }
    }
  }
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

console.log(nestedEvenSum(obj1))

function capitalizeWords(str) {
  let resultArray = [];
  if(str.length === 0) return resultArray;
  resultArray.push(str[0].toUpperCase());
  return resultArray.concat(capitalizeWords(str.slice(1))); 
}

console.log(capitalizeWords(["i", "am", "bidisha"]))

function stringfyNumbers(obj) {
  let newObj = {};
  for(key in obj) {
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringfyNumbers(obj[key]);
    } else {
      if(typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringfyNumbers(obj))

function collectStrings(obj, result = []) {
  for(key in obj) {
    if(typeof obj[key] === 'object') {
      collectStrings(obj[key], result);
    } else {
      if(typeof obj[key] === 'string') {
        result.push(obj[key]);
      }
    }
  }
  return result;
} 

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz",
                      tarat: "bidisha"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj))