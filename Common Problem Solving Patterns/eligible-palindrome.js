// A problem to check if string can be converted into a palindrome by rearranging the characters
// Time Complexity = O(n)

const isEligiblePalindrome = (str) => {
  let frequencyCounter = {};
  let oddCount = 0;

  for(let index in str) {
    frequencyCounter[str.charAt(index)] = (frequencyCounter[str.charAt(index)] || 0) + 1; 
  }

  for(let key in frequencyCounter) {
    if(frequencyCounter[key] % 2 !== 0) {
        oddCount++;
        if(oddCount > 1) {
          console.log(`${str} is not an eligible palindrome`);
          return;
        }
    }
  }
  console.log(`${str} is an eligible palindrome`);
}

isEligiblePalindrome("geeksogeeks");
isEligiblePalindrome("geeksforgeeks");
isEligiblePalindrome("racecar");
isEligiblePalindrome("abbabb");
isEligiblePalindrome("ababab");



