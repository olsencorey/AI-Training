function myReplace(str, replacedWord, replacer) {
  if (replacedWord[0] === replacedWord[0].toUpperCase())
    replacer = replacer[0].toUpperCase() + replacer.slice(1);
  else {
    replacer = replacer[0].toLowerCase() + replacer.slice(1);
  }
  
  const replacedRegex = new RegExp(replacedWord);
  return str.replace(replacedRegex,replacer);
}

console.log(myReplace("I think we should look up there", "up", "Down"));
