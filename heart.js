let bodye1 = document.querySelector("body");
bodye1.addEventListener("mousemove", (event) =>
{
const xpos = event.offsetX;
const ypos = event.offsetY;
const spane1 = document.createElement("span");
console.log(spane1);
spane1.style.left = xpos + "px";
spane1.style.top = ypos + "px";
bodye1.appendChild(spane1);
const size = Math.random() * 100;
spane1.style.height = size + "px";
spane1.style.width = size + "px";
bodye1.appendChild(spane1);
setTimeout(() => {
  spane1.remove();  
}, 3000);

}

)