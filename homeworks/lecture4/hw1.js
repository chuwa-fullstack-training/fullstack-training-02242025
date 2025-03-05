// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const pattern = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
    let stack = [];

    for (let match of html.matchAll(pattern)) {
        let tag = match[1];
        if (match[0].startsWith('</')) {
            if (stack.pop() !== tag) return false;
        } else {
            stack.push(tag);
        }
    }

    return stack.length === 0;
}


console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));  // true
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));  // false
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));  // true
