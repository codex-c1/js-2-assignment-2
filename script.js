// It's a good idea to declare all your variables.
// This will let our JS linter help us find
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var aliceSays,
  bobSays,
  carolSays,
  danSays,
  ellieSays,
  frankSays,
  gregSays,
  harrySays,
  ivySays,
  jackSays;

// this variable is set to a string.
let theMessage = "Kathy loves Larry";

aliceSays = theMessage;
bobSays = aliceSays;
carolSays = bobSays;
danSays = carolSays;
ellieSays = danSays;
frankSays = ellieSays;
gregSays = frankSays;
harrySays = frankSays;
ivySays = harrySays;
jackSays = ivySays;

// call setNames from 'messages.js'
// to set the messages in the DOM.
setMessages();

let aliceBtn;
aliceBtn = document.querySelector("#alice-button");

function tellsAlice() {
  aliceSays = "Lucy loves Ricky";
  aliceElm = document.querySelector("#alice-says");
  aliceElm.textContent = aliceSays;
}
aliceBtn.onclick = tellsAlice;

//* Bob's Button *//

let bobBtn;
bobBtn = document.querySelector("#bob-button");

function tellsBob() {
  bobSays = "Sally loves Shroder";
  bobElm = document.querySelector("#bob-says");
  bobElm.textContent = bobSays;
}
bobBtn.onclick = tellsBob;

setMessages();
