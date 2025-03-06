// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagPattern = /<\/?([a-zA-Z]+)[^>]*>/g;
    let stack = [];
    let match;
    while ((match = tagPattern.exec(html)) !== null) {
        let tag = match[1];

        if (match[0][1] !== '/') {
            // Opening tag, push to stack
            stack.push(tag);
        } else {
            // Closing tag, check stack
            if (stack.length === 0 || stack.pop() !== tag) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
