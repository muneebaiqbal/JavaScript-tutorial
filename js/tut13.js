// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript
let str='harry'
let links = document.links;
for (i in Array.from(links)) {
    if (document.links[i].href.includes(str)) {
        console.log(document.links[i].href);
    }
}