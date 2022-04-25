function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("")
  if(reversedWord === word)
  {
    return true
  }
  else
  {
    return false
  }

  

}

isPalindrome("hello")




/* 
  Add your pseudocode here
  - create a new variable to hold the reversed version of the word we are testing
  - split the word to have access to individual letter,
  - reverse the order of the letters
  - join them to have a reversed order word
  - compare the word received with the reversed version with strict operator

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
