console.log('Tutorial 21 exercise 2 JavaScript');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
let div = document.createElement("div");
let text = document.createTextNode("text can be edited by clicking");
div.appendChild(text);
document.body.appendChild(div);
div.addEventListener("click",edit);
function edit(e){
    div.setAttribute("contenteditable","true");
}
div.addEventListener("blur",outside)
function outside(){
    localStorage.clear()
    localStorage.setItem("div",div.innerText);
    
}
div.innerText=localStorage.getItem("div")