'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



  const pigLatin = (word) => {
      word = word.toLowerCase()
      word = word.trim()
      let splitUp = word.split('');
      //console.log(splitUp)
      
    var vowels = ["a", "e", "i", "o", "u"]
    
    for (let i = 0; i <= splitUp.length; i++){
      var currentLetter = splitUp[i]
      
    if (vowels.includes(currentLetter)){
      //console.log('our vowel is', currentLetter ,'at position', [i])
      let tempV = [i]
      if (i <= 0){
  
        splitUp.push('yay')
        //console.log(splitUp)
        
        let newString2 = splitUp.toString()
        for(let w = 0; w <= splitUp.length; w++){
          newString2 = newString2.replace(',', '')
        }
        
        return newString2

        break
       
        } else {
          for(let n = 0; n <= tempV - 1; n++){
          splitUp.push(splitUp[0])
          splitUp.splice(0,1)
        //console.log('our word is ', word ,' and our array is',splitUp)
        }
  
        splitUp.push('ay')
        let newString = splitUp.toString()
        
        for(let j = 0; j <= splitUp.length; j++){
          newString = newString.replace(',', '')
          
        }
        
        console.log(newString)
        return newString

        break
      
        }
        
      }
       
    
    }
   
  }




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.