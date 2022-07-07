const boxSix = document.getElementById("box-six");
const background = document.getElementById("dom-manipulation-content");
const title = document.getElementById("title");

let nightMode = false;

boxSix.addEventListener("click", function(event){
  if (!nightMode) {
    background.style.backgroundColor = "#121212";
    title.style.color = "#EEEEEE";
    nightMode = true;
  } else {
    background.style.backgroundColor = "#EEEEEE";
    title.style.color = "#121212";
    nightMode = false;
  }
});
