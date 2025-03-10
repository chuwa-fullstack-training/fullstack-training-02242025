// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const stack = [];
    let currentTag = '';
    let isClosingTag = false;
    
    for (let i = 0; i < html.length; i++) {
        const char = html[i];
        
        if (char === '<') {
            currentTag = '';
            isClosingTag = false;
            continue;
        }
        
        if (char === '/') {
            isClosingTag = true;
            continue;
        }
        
        if (char === '>') {
            if (currentTag) {
                if (isClosingTag) {
                    if (stack.length === 0 || stack.pop() !== currentTag) {
                        return false;
                    }
                } else {
                    stack.push(currentTag);
                }
            }
            currentTag = '';
            continue;
        }
        
        currentTag += char;
    }
    
    return stack.length === 0;
}
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>')); // false