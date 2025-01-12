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

    // Method to generate starting abilities for all characters
    generateStartingAbilities(pc) {
        let path = pc.path;  // grab path
        let startingAbilities = [path.startingAbility];  // declare starting ability array and add the first path ability
        startingAbilities.push(randomStringFromArray(path.abilities));  // add a random second path ability
    
        // Call child-specific ability method (polymorphism in action)
        this.addChildAbilities(startingAbilities, pc);
    
        // Return or set the starting abilities (e.g., store in this.startingAbilities)
        return startingAbilities;
    }
    
    // This method will be overridden in child classes
    addChildAbilities(startingAbilities, pc) {
        // Placeholder, can be overridden in child classes like Gloamspun
        throw new Error("addChildAbilities should be implemented in the child class!");
    }

    


}