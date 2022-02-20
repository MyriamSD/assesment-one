//1
const one = document.getElementById('container')
2//
const two = document.querySelector('#container')
const three = document.getElementsByClassName('second')
const four = document.querySelector('ol .third')

one.innerText = 'Hello!'

six = document.getElementsByClassName('footer')
// six.setAttribute("class", "main");
six.classList.add("main")
six.classList.remove("main")

// const newLI = document.createElement("li")
// newLI.innerText = 'four'

// section.ul += newLI

const ul = document.querySelector("section .ul");

const newLi = document.createElement("li");

newLi.innerText = "four";

ul.appendChild(newLi);

const listItems = document.querySelectorAll("ol li");

for(let listItem of listItems){
    listItem[i].style.backgroundColor = "green";
  }

