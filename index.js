// Add event listener to button click
for (var i=0; i<=6; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    outputSound(this.innerHTML); // output function for the mouse click
    buttonAnimation(this.innerHTML);

  });
}

// Add event listener to keyboard press
document.addEventListener("keypress", function() {

  outputSound(event.key); // output function for the keyboard press
  buttonAnimation(event.key);
});

// Function that determines which sound to make based on the value of inType
function outputSound(inType) {

  switch (inType) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l":
      var kickB = new Audio('sounds/kick-bass.mp3');
      kickB.play();
    break;


    default:
      console.log(this.innerHTML);
      console.log(event.key);
  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);

}
