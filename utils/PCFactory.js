import Gloamspun from "../pcs/Gloamspun.js";
import Murkborn from "../pcs/Murkborn.js";
import Inhuman from "../pcs/offspring/Inhuman.js";
import Mystic from "../pcs/offspring/Mystic.js";
import SourceBooks from "../enums/common/SourceBooks.js";
import { getSelectedBooks } from "./checkbox.js";

function createRandomOffspring() {
    let offspring;
    if (Math.random() < 0.5) {
        offspring = Inhuman.getInstance();
    } else {
        offspring = Mystic.getInstance();
    }
    return offspring;
}

function createRandomPC(selectedBooks) {
    const validChars = [];

    if (selectedBooks.includes(SourceBooks.MURK)) validChars.push(() => new Murkborn());
    validChars.push(() => new Gloamspun());
    if (selectedBooks.includes(SourceBooks.EVENTIDE)) {
        validChars.push(() => Inhuman.getInstance());
        validChars.push(() => Mystic.getInstance());
    }

    if (validChars.length === 0) {
        throw new Error("No valid character types available. Please select sourcebooks."); // If you actually see this error message, I'm impressed because you broke this well
    }

    const randomNumber = Math.floor(Math.random() * validChars.length);
    return validChars[randomNumber]();
}



export function getCharacter(type) {
    const selectedBooks = getSelectedBooks();

    try {
        switch (type) {
            case "Gloamspun":
                return new Gloamspun();
            case "Murkborn":
                if (!selectedBooks.includes(SourceBooks.MURK)) {
                    throw new Error("Murkborn require the Murk sourcebook."); // You need books!
                }
                return new Murkborn();
            case "Offspring":
                if (!selectedBooks.includes(SourceBooks.EVENTIDE)) {
                    throw new Error("Offspring require the Eventide sourcebook."); // You need books!
                }
                return createRandomOffspring();
            case "Any":
                return createRandomPC(selectedBooks);
            default:
                return new Gloamspun(); // Gloamspun get to be the default
        }
    } catch (error) {
        document.getElementById("output-box").innerHTML = `<p class="error">${error.message}</p>`; // :(
        console.error(error.message);
        return null;
    }
}

