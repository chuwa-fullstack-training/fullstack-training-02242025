// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const regex = /<\/?([a-zA-Z]+)>/g;
    let stack = [];

    for (let match of html.matchAll(regex)) {
        let tag = match[1];
        let isClosingTag = match[0][1] === "/";

        if (!isClosingTag) {
            stack.push(tag);
        } else {
            if (!stack.length || stack.pop() !== tag) {
                return false;
            }
        }
    }

    return stack.length === 0; 
}
