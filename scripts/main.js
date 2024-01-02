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

function showLoadingScreen() {
  document.getElementById('loading-screen').classList.add('active');
}

function hideLoadingScreen() {
  document.getElementById('loading-screen').classList.remove('active');
}

function loadPage(page) {
  showLoadingScreen();

  document.body.style.backgroundColor = '#f0f0f0'; // Adjust background color during transition
  document.getElementById('content').style.opacity = '0'; // Fade out the content

  fetch(page)
      .then(response => response.text())
      .then(html => {
          setTimeout(() => {
              document.body.style.backgroundColor = ''; // Reset background color
              document.getElementById('content').innerHTML = html;
              document.getElementById('content').style.opacity = '1'; // Fade in the new content
              hideLoadingScreen();
          }, 500); // Adjust the timeout to match the transition duration
      })
      .catch(error => {
          console.error('Error:', error);
          hideLoadingScreen(); // Ensure loading screen is hidden on error
      });
}