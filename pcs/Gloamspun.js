"use strict";


import { randomFromObject, randomStringFromArray } from "../utils/CharacterUtils.js";
import { randomStats } from "../utils/CharacterUtils.js";
import SourceBooks from "../enums/common/SourceBooks.js";
import Perks from "../enums/common/Perks.js";
import Lores from "../enums/common/Lores.js";
import Paths from "../enums/common/Paths.js";
import Tales from "../enums/fae/Tales.js";
import Shrouds from "../enums/fae/Shrouds.js";
import Retinues from "../enums/fae/Retinues.js";
import Roles from "../enums/fae/Roles.js";
import PlayerCharacter from "./PlayerCharacter.js";
import { getSelectedBooks } from "../utils/checkbox.js";


export default class Gloamspun extends PlayerCharacter {
    static EXCLUDED_PERKS = [Perks.NECROMANCER];
    static INCLUDED_LORES =  [Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE];
    
    constructor() {
        // Get the selected books from the getSelectedBooks function
        const selectedBooks = getSelectedBooks();

        super(randomStats(), randomFromObject(Perks, Gloamspun.EXCLUDED_PERKS, [], selectedBooks), randomFromObject(Paths, [], [], selectedBooks));

        // Initialize the rest of the properties
        this.tale = randomFromObject(Tales, [], [], selectedBooks);
        this.shroud = randomFromObject(Shrouds, [], [], selectedBooks);
        this.retinue = randomFromObject(Retinues, [], [], selectedBooks);
        this.role = randomFromObject(Roles, [], [], selectedBooks);

        if (Math.random() < 0.5) {
            this.optionalLore = null;
        } else {
            this.optionalLore = randomFromObject(Lores, [], Gloamspun.INCLUDED_LORES, selectedBooks);
        }

        this.startingAbilities = this.generateStartingAbilities(this);
    }

    addChildAbilities(startingAbilities, gloamspun) {
        let tale = gloamspun.tale;
        let optionalLore = gloamspun.optionalLore;

        startingAbilities.push(tale.startingAbility);
        
        if (optionalLore != null) {
            let randomCantrip = randomStringFromArray(optionalLore.abilities);
            startingAbilities.push(randomCantrip);
        } else {
            let secondTaleAbility = randomStringFromArray(tale.abilities)
            startingAbilities.push(secondTaleAbility);
        }

        return startingAbilities;
    }

    toString() {
        let output = "Type: Gloamspun (The Gloaming Diaries)\n";
        output += `Path: ${this.path.name} (${this.path.source})\n`;
        output += `Tale: ${this.tale.name} (${this.tale.source})\n`;
        output += `Perk: ${this.perk.name} (${this.perk.source})\n`;
        output += `Shroud: ${this.shroud}\n`;
        output += `Retinue: ${this.retinue}\n`;
        output += `Role: ${this.role.name}\n`;
        if (this.optionalLore != null) {
            output += `Optional Lore: ${this.optionalLore.name} (${this.optionalLore.source})\n`;
        }
        output += `Starting Abilities: ${this.startingAbilities.join(", ")}\n`;
        output += "STATS:\n";
        output += `   Might: ${this.might}\n`;
        output += `   Agility: ${this.agility}\n`;
        output += `   Wits: ${this.wits}\n`;
        output += `   Heart: ${this.heart}\n`;
        output += `   Poise: ${this.poise}\n`;
    
        return output;
    }

    toHTML() {
        let output = "<section class='character-info'>";
        output += `<p><strong>Type:</strong> Gloamspun (The Gloaming Diaries)</p>`;
        output += `<p><strong>Path:</strong> ${this.path.name} (${this.path.source})</p>`;
        output += `<p><strong>Tale:</strong> ${this.tale.name} (${this.tale.source})</p>`;
        output += `<p><strong>Perk:</strong> ${this.perk.name} (${this.perk.source})</p>`;
        output += `<p><strong>Shroud:</strong> ${this.shroud}</p>`;
        output += `<p><strong>Retinue:</strong> ${this.retinue}</p>`;
        output += `<p><strong>Role:</strong> ${this.role.name}</p>`;
        if (this.optionalLore != null) {
            output += `<p><strong>Optional Lore:</strong> ${this.optionalLore.name} (${this.optionalLore.source})</p>`;
        }
        output += `<p><strong>Starting Abilities:</strong> ${this.startingAbilities.join(", ")}</p>`;

        output += "<section class='stats'>";
        output += "<h3>STATS:</h3>"
        output += `<p><strong>Might:</strong> ${this.might}</p>`;
        output += `<p><strong>Agility:</strong> ${this.agility}</p>`;
        output += `<p><strong>Wits:</strong> ${this.wits}</p>`;
        output += `<p><strong>Heart:</strong> ${this.heart}</p>`;
        output += `<p><strong>Poise:</strong> ${this.poise}</p>`;
        output += "</section></section>";
    
        return output;
    }
    
}


