// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const tagPattern = /<\s*(\/?)([a-zA-Z]+)[^>]*>/g;
    const stack = [];
    let match;
    while ((match = tagPattern.exec(html)) !== null) {
        const isClosing = match[1] === '/';
        const tagName = match[2].toLowerCase();
        if (!isClosing) {
            stack.push(tagName);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const lastTag = stack.pop();
        if (lastTag !== tagName) {
            return false;
        }
    }
  }
}