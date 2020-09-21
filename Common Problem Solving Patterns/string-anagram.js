// A problem to check if two strings are Anagrams of each other
// Time Complexity = O(n)

const isAnagram = (str1, str2) => {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if(str1.length !== str2.length) {
    console.log(`${str1} and ${str2} are not anagrams!`);
    return;
  } else {
    for(let index in str1) {
      frequencyCounter1[str1.charAt(index)] = (frequencyCounter1[str1.charAt(index)] || 0) + 1; 
    }
    for(let index in str2) {
      frequencyCounter2[str2.charAt(index)] = (frequencyCounter2[str2.charAt(index)] || 0) + 1; 
    }
    for(let key in str1) {
      if(frequencyCounter1[key] !== frequencyCounter2[key]) {
        console.log(`${str1} and ${str2} are not anagrams!`);
        return;
      }
    }
    console.log(`${str1} and ${str2} are anagrams!`);
    return;
  }
}

isAnagram("azz", "zza")

