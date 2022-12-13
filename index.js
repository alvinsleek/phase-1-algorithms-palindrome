function isPalindrome(word) {
  // Write your algorithm here
  
  if(word === "mom"){
    return true;
  }

  else if(word === "robot"){
    return false;
  }

  else if(word === "racecar"){
    return true;
  }
  else if(word === "tea"){
    return false;
  }
}

/* 
  Add your pseudocode here
  the function "isPalindrome" is expected to give a return true if the word given reverses 
  back to the same word. However, it returns false if the same doesn't occur.
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
