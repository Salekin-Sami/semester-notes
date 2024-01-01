const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/1920px-Gsm_structures.svg.png") {
    myImage.setAttribute("src", "../images/Cellular_network_standards_and_generation_timeline.svg.png");
  } else {
    myImage.setAttribute("src", "../images/1920px-Gsm_structures.svg.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName) setUserName();
  else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to the world of Wireless Communication, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome Back, ${storedName} !`;
}

myButton.onclick = () => {
  setUserName();
};
