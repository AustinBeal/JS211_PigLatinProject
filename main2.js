let word = document.getElementById("entertext").value
console.log(word)

function pigLatin (word) {
    document.getElementById('newstrings').innerHTML = ' '
   word = document.getElementById("entertext").value;
 
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
      //document.getElementById('newstrings').insertAdjacentHTML("afterend", newString)
      
      let tempWrapper = document.createElement('li');
      tempWrapper.innerHTML = newString;
      //console.log(tempWrapper)
      document.getElementById('newstrings').appendChild(tempWrapper.firstChild);
      
      return newString
    
      }
     
    }
 
  }

}
