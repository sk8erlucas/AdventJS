// Ni idea de como encarar esto, lo hizo todo copilot
function getIndexsForPalindrome(word) {
  let freq = {};
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  let oddCount = 0;
  for (let char in freq) {
    if (freq[char] % 2 !== 0) {
      oddCount++;
    }
  }

  if (oddCount > 1) {
    return null;
  }

  if (word === word.split("").reverse().join("")) {
    return [];
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      let chars = word.split("");
      [chars[i], chars[j]] = [chars[j], chars[i]];
      let newWord = chars.join("");
      if (newWord === newWord.split("").reverse().join("")) {
        return [i, j];
      }
    }
  }

  return null;
}

getIndexsForPalindrome("anna"); // []
getIndexsForPalindrome("abab"); // [0, 1]
getIndexsForPalindrome("abac"); // null
getIndexsForPalindrome("aaaaaaaa"); // []
getIndexsForPalindrome("aaababa"); // [1, 3]
getIndexsForPalindrome("caababa"); // null
