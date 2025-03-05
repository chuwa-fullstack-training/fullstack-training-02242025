// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
   
   const tagPattern = /<\/?([a-z0-9]+)(?:\s+[^>]*)?>|[^<]+/gi;
   
   const matches = html.match(tagPattern) || [];
   
   for (const match of matches) {
       if (!match.startsWith('<')) continue;
       
       if (match.startsWith('</')) {
           const tagName = match.match(/<\/([a-z0-9]+)>/i)[1];
           
           if (stack.length === 0 || stack.pop() !== tagName) {
               return false;
           }
       }
       else {
           const tagName = match.match(/<([a-z0-9]+)(?:\s+[^>]*)?>/i)[1];
           
           stack.push(tagName);
       }
   }
   
   return stack.length === 0;
}