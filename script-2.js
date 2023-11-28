// It's a good idea to declare all your variables.
// This will let our JS linter help us find
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var alicesBulletin,
  bobsBulletin,
  carolsBulletin,
  dansBulletin,
  elliesBulletin,
  franksBulletin,
  gregsBulletin,
  harrysBulletin,
  ivysBulletin,
  jacksBulletin;

let schoolBulletin;

// this variable is set to an object
schoolBulletin = {
  message: "Cougars Win!",
};

alicesBulletin = schoolBulletin;
bobsBulletin = alicesBulletin;
carolsBulletin = bobsBulletin;
dansBulletin = carolsBulletin;
elliesBulletin = dansBulletin;
franksBulletin = elliesBulletin;
gregsBulletin = franksBulletin;
harrysBulletin = gregsBulletin;
ivysBulletin = harrysBulletin;
jacksBulletin = ivysBulletin;

alicesBulletin = {
  message: "Sox Win!",
};

carolsBulletin.message = "Ghosts Win!";
// Changed carlosBulletine message and it changed all of them/
gregsBulletin.message = "Saints win... Finally!";
// changed gregs message and it changed everyones message.

function setNewMessage() {
  let inputElm, message;
  inputElm = document.querySelector("#new-message");
  message = inputElm.value;
  schoolBulletin.message = message;
  setBulletins();
}

let msgBtn;
msgBtn = document.querySelector("#msg-button");
msgBtn.onclick = setNewMessage;

// call setNames from 'messages.js'
// to set the messages in the DOM.
setBulletins();
