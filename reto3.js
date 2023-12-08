function findNaughtyStep(original, modified) {
    const maxLength = Math.max(original.length, modified.length);
  
    for (let i = 0; i < maxLength; i++) {
      const originalChar = original[i];
      const modifiedChar = modified[i];
  
      if (originalChar !== modifiedChar) {
        return original.length > modified.length ? originalChar : modifiedChar;
      }
    }
  
    return "";
  }

let original = "abcd";
let modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified)); // 'f'

original = "abcde";
modified = "abcde";
console.log(findNaughtyStep(original, modified)); // ''
