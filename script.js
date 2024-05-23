let i = 0;
const txt = "Hi, I'm Luis";
const speed = 100;
const txtBig = document.getElementById("text-luis");
const txtSmall = document.getElementById("text-luis-small");

function typeWriter() {
  if (i < txt.length) {
    txtBig.innerHTML += txt.charAt(i);
    txtSmall.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
AOS.init();
