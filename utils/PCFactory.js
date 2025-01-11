import Gloamspun from "../pcs/Gloamspun.js";
import Murkborn from "../pcs/Murkborn.js";
import Inhuman from "../pcs/offspring/Inhuman.js";
import Mystic from "../pcs/offspring/Mystic.js";
import SourceBooks from "../enums/common/SourceBooks.js";

function createRandomOffspring() {
    let offspring;
    if (Math.random() < 0.5) {
        offspring = Inhuman.getInstance();
    } else {
        offspring = Mystic.getInstance();
    }
    return offspring;  // Make sure to return the created instance
}

function createRandomPC() {
    let randomNumber = Math.floor(Math.random() * 4);  // Generates a number between 0 and 3
    let offspring;
    switch (randomNumber) {
        case 0:
            return new Gloamspun();
        case 1:
            return new Murkborn();
        case 3:
            offspring = Inhuman.getInstance();
            return offspring;
        case 4:
            offspring = Mystic.getInstance();
            return offspring;         
    }
}

export function getCharacter(type) {

    switch(type) {
        case "Gloamspun":
            return new Gloamspun();
        case "Murkborn":
            return new Murkborn();
        case "Offspring":
            return createRandomOffspring();  // Return the instance created by createRandomOffspring
        case "Any":
            createRandomPC();
        default:
            return new Gloamspun();
    }
}
