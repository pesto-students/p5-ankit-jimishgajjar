/*
 * Asignment 5.2

 * Write a function called vowelCount which accepts a string and
 * returns a map where the keys arenumbers and the values are the count of the vowels in the string.
*/

// Creating a function for vowelCount

function vowelCount(string) {
  let vowels = "aeiou";

  const vowelMap = new Map();
  for (let str of string) {
    if (vowels.includes(str)) {
      if (vowelMap.has(str)) {
        let temp = vowelMap.get(str) + 1;
        vowelMap.set(str, temp);
      } else {
        vowelMap.set(str, 1);
      }
    }
  }

  return vowelMap;
}

console.log(vowelCount("Mark Zuckerberg"));
console.log(vowelCount("Elon Musk"));
console.log(vowelCount("Thymy"));
