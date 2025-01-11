
import { getCharacter } from './utils/PCFactory.js';
import { setupCheckboxListeners } from './utils/checkbox.js';

const gloamspunButton = document.getElementById('gloamspunButton');
const murkbornButton = document.getElementById('murkbornButton');
const offspringButton = document.getElementById('offspringButton');
const anyButton = document.getElementById('anyButton');

setupCheckboxListeners();

gloamspunButton.addEventListener('click', () => {
    let char = getCharacter('Gloamspun');
    document.getElementById("output-box").innerHTML = char.toHTML();  
});

murkbornButton.addEventListener('click', () => {
    let char = getCharacter('Murkborn');
    document.getElementById("output-box").innerHTML = char.toHTML();
});

offspringButton.addEventListener('click', () => {
    let char = getCharacter('Offspring');
    document.getElementById("output-box").innerHTML = char.toHTML();
});

anyButton.addEventListener('click', () => {
    let char = getCharacter('Any');
    document.getElementById("output-box").innerHTML = char.toHTML();
});