// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const regex = /<\/?([a-zA-Z0-9-]+)(\s[^>]*)?>/g; 
    const matches = html.match(regex) || [];
    let [left ,right] = [0,matches.length];
    while(left < right){
        if(matches[left] !== matches[right].replace("/","")) return false;
    }
    return true;
}