// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const tagPattern = /<\/?([a-zA-Z]+)>/g;  // Matches opening and closing tags
    const stack = [];
    let match;
  
    while ((match = tagPattern.exec(html)) !== null) {
      const [fullTag, tagName] = match;
      
      if (fullTag.startsWith('</')) {
        if (stack.length === 0 || stack.pop() !== tagName) {
          return false;
        }
      } else {
        // Opening tag: push tag name onto stack
        stack.push(tagName);
      }
    }
  
    return stack.length === 0;
}