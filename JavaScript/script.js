function spinalCase(str) {
  return str
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase();
}

console.log(spinalCase("AllThe-small Things"));
