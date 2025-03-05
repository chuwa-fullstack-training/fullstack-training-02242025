// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  let stack = [];
  let tags = html.match(/<\/?[a-zA-Z]+>/g) || []; // Extract tags only

  for (let tag of tags) {
    if (!tag.includes("/")) {
      stack.push(tag); // Opening tag <tag>
    } else {
      if (stack.length === 0 || stack.pop() !== tag.replace("/", "")) {
        return false; // Mismatch
      }
    }
  }

  return stack.length === 0;
}

console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
); // true
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></head></html>")
); // false
console.log(checkValidHTML("<html><head><title>My Title</title></head></html")); // false
console.log(checkValidHTML("<div><p>Hello</p></div>")); // true
console.log(checkValidHTML("<div><p>Hello</div></p>")); // false
console.log(checkValidHTML("<div><span></span></div>")); // true
console.log(checkValidHTML("<div><span></div></span>")); // false
