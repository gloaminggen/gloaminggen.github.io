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
    let randomNumber = Math.floor(Math.random() * 4);
    let pc;

    switch (randomNumber) {
        case 0:
            pc = new Murkborn();
            break;
        case 1:
            pc = new Gloamspun();
            break;
        case 2:
            pc = Inhuman.getInstance();
            break;
        case 3:
            pc = Mystic.getInstance();
            break;
    }

    console.log("Generated PC:", pc);
    return pc;
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
            return createRandomPC();
        default:
            return new Gloamspun();
    }
}
