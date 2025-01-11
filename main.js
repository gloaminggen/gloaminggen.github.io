import { getCharacter } from './utils/PCFactory.js';  // Adjust the import path
import { setupCheckboxListeners } from './utils/checkbox.js';

// Get references to the buttons and the output area
const gloamspunButton = document.getElementById('gloamspunButton');
const murkbornButton = document.getElementById('murkbornButton');
const offspringButton = document.getElementById('offspringButton');
const anyButton = document.getElementById('anyButton');

setupCheckboxListeners();

// Define the functions to be called when each button is clicked
gloamspunButton.addEventListener('click', () => {
    let char = getCharacter('Gloamspun');
    document.getElementById("output-box").innerHTML = char.toHTML();  // Assuming toString() gives a string output
});

murkbornButton.addEventListener('click', () => {
    let char = getCharacter('Murkborn');
    document.getElementById("output-box").innerHTML = char.toHTML();  // Assuming toString() gives a string output
});

offspringButton.addEventListener('click', () => {
    let char = getCharacter('Offspring');
    document.getElementById("output-box").innerHTML = char.toHTML();  // Assuming toString() gives a string output
});

anyButton.addEventListener('click', () => {
    let char = getCharacter('Any');
    document.getElementById("output-box").innerHTML = char.toHTML();  // Assuming toString() gives a string output
});
