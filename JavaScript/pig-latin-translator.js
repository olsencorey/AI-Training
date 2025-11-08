function translatePigLatin(str) {
  return str
  .split(" ")
  .map(word => {
    // find starting consonant cluster
    const match = word.match(/^([^aeiouAEIOU]+)(.*)/);
    if (match) {
      // word starts with consonant(s): move them to end, add "ay"
      return match[2] + match[1] + "ay";
    } else {
      // word starts with a vowel: just add "way"
      return word + "way";
    }
  })
  .join(" ");
}

console.log(translatePigLatin("schwartz"));
