/* let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++){
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
} */

/* console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelectorAll(".boxLink"));

console.dir(document.querySelector("div a"));
 */

let para = document.querySelector('p');
// para.innerText = "Hi Dear! What's Up"

let heading = document.querySelector('h1');

heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = 'green'
}

/* for(let i=0; i<links.length; i++){
    links[i].style.color = 'red'
} */

/* let para2 = document.createElement('p');
para2.innerText = "Hello Ji";

let body = document.querySelector('body');
body.append(para2);

let box = document.querySelector('.box');
box.appendChild(para2);

let btn = document.createElement('button');
btn.innerText = 'click me!';
box.append(btn);

para2.append(' Whats up'); */

/* let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";

document.querySelector('body').append(para1);

para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText = "Hey I'm a Blue! h3";

document.querySelector('body').append(h3);

h3.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div";
para2.innerText = "ME Too!";

div.append(h1);
div.append(para2);

div.classList.add("box1")
document.querySelector("body").append(div); */





