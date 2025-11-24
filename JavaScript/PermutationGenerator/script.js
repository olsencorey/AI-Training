function permuteString(str, prefix = "", results = []) {
  if (!str.length) {
    results.push(prefix);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    permuteString(remaining, prefix + currentChar, results);
  }

  if (!prefix) {
    return Array.from(new Set(results));
  }

  return results;
}

console.log(permuteString("walk"));
