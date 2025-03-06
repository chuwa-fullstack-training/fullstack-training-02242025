// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let tag_list = [];
    let regex = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
    let match;
     while ((match = regex.exec(html)) !== null) {
         // console.log(match);
         let tag = match[1];
         if (match[0][1] !== '/'){
             tag_list.push(tag);
         }
         else{
             if (tag_list.length===0 || tag_list.pop() !== tag){
                 return false;
             }
         }
     }
    return tag_list.length===0;
    
    
}
