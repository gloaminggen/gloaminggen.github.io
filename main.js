
import { getCharacter } from './utils/PCFactory.js';
import { setupCheckboxListeners } from './utils/checkbox.js';

const gloamspunButton = document.getElementById('gloamspunButton');
const murkbornButton = document.getElementById('murkbornButton');
const offspringButton = document.getElementById('offspringButton');
const anyButton = document.getElementById('anyButton');

setupCheckboxListeners();
// Can you keep a list of checkboxes that are checked (yes)
// Then write a function that builds an inclusion (or exclusion) list of only items in the object that fulfill the book criteria?

gloamspunButton.addEventListener('click', () => {
    const char = getCharacter('Gloamspun');
    if (char) document.getElementById("output-box").innerHTML = char.toHTML();
});

murkbornButton.addEventListener('click', () => {
    const char = getCharacter('Murkborn');
    if (char) document.getElementById("output-box").innerHTML = char.toHTML();
});

offspringButton.addEventListener('click', () => {
    const char = getCharacter('Offspring');
    if (char) document.getElementById("output-box").innerHTML = char.toHTML();
});

anyButton.addEventListener('click', () => {
    const char = getCharacter('Any');
    if (char) document.getElementById("output-box").innerHTML = char.toHTML();
});
