let btn = document.querySelector('button');
console.dir(btn);

/* btn.onclick = function(){
    alert("button was clicked!")
} */

function sayHello(){
    alert("hello!")
}

function sayName(){
    alert("Hey!")
}

// btn.onclick = sayHello;
/* btn.addEventListener("click", sayHello);
btn.addEventListener("click", sayName); */
/* btn.addEventListener('dblclick', function(){
    console.log("you double clicked me!")
}) */

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("parah was clicked!");
})

let box = document.querySelector('.box');
box.addEventListener('mouseenter', function() {
    console.log("mouse inside box")
})

btn.addEventListener("click", function(){
    console.log(this);
})

let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
})