"use strict";

import { randomStringFromArray } from "../utils/CharacterUtils.js";
import { getSelectedBooks } from "../utils/checkbox.js";

export default class PlayerCharacter { 
    // Superconstructor
    constructor(stats, perk, path) {
        this.might = stats[0];
        this.agility = stats[1];
        this.wits = stats[2];
        this.heart = stats[3];
        this.poise = stats[4];

        this.perk = perk;
        this.path = path;
    }

    setStartingAbilities(startingAbilities) {
        this.startingAbilities = startingAbilities;
    }


    generateStartingAbilities(pc) {
        let path = pc.path;  // grab path
        let startingAbilities = [path.startingAbility];  // declare starting ability array and add the first path ability
        startingAbilities.push(randomStringFromArray(path.abilities));  // add a random second path ability
    

        this.addChildAbilities(startingAbilities, pc);
    
        return startingAbilities;
    }
    
    // only here for override
    addChildAbilities(startingAbilities, pc) {
        throw new Error("addChildAbilities should be implemented in the child class!"); // Again if you managed to see this I'm impressed
    }

    


}