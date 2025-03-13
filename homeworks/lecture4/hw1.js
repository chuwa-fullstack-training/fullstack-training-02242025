// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];

    let tagPattern = /<\/?([a-zA-Z0-9]+)/g;

    let match;

    while ((match = tagPattern.exec(html)) !== null){
        let tag = match[1];

        if (match[0][1] !=='/'){
            stack.push(tag);
        }else{
            if ( stack.length === 0 || stack.pop() !== tag){
                return false;
            }
        }
    }
    return stack.length ===0;
}

console.log(checkValidHTML(" <html><head><title>My Title</title></head></html>"))
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>" ))
console.log(checkValidHTML("<html><head><title>My Title</title></head></html> "))
// <html><head><title>My Title</title></head></head></html>
// <html><head><title>My Title</title></head></html>