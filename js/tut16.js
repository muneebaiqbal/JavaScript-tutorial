console.log('this is tut 16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

// Solve this Quize 
// by using these tags <h2> ,<I> , <href> 
let div = document.querySelector('div');
console.log(div);
let elem3 = document.createElement('a');
elem3.setAttribute('href', 'https://www.codewithharry.com');

let elem4 = document.createElement('h2');

// let elem5 = document.createElement('I');
// elem4.appendChild(elem5);

console.log(elem4);
elem3.appendChild(elem4);
console.log(elem3);

let text1 = document.createTextNode('Go to CodeWithHarry');
elem4.appendChild(text1)
console.log(elem4);

div.appendChild(elem3);
