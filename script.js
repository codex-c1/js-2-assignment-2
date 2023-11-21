
// It's a good idea to declare all your variables.
// This will let our JS linter help us find 
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var aliceSays, bobSays, carolSays, danSays, ellieSays, frankSays, harrySays, ivySays, jackSays;


// this variable is set to a string.
setMessages();
function setAll(){ 
    let theMessage = "Kathy loves Larry";
    aliceSays = theMessage;
    bobSays = aliceSays;
    carolSays = bobSays;
    danSays = carolSays;
    ellieSays = danSays;
    frankSays = ellieSays;
    gregSays = frankSays;
    harrySays = gregSays;
    ivySays = harrySays;
    jackSays = ivySays;
    setMessages();
}
let allBtn = document.querySelector("#all-btn");
allBtn.onclick = setAll;// call setNames from 'messages.js'
// to set the messages in the DOM.
function setAlice(){
    let alice = document.querySelector("#alice-input").value;
    aliceSays = alice;
    setMessages();
}
aliceBtn = document.querySelector("#alice-btn");
aliceBtn.onclick = setAlice;
function setBob(){
    let bob = document.querySelector("#bob-input").value;
    bobSays = bob;
    setMessages();
}
bobBtn = document.querySelector("#bob-btn");
bobBtn.onclick = setBob;

