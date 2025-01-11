"use strict";

import { randomFromObject, randomStats, randomStringFromArray } from "../../utils/CharacterUtils.js";
import Paths from "../../enums/common/Paths.js";
import Perks from "../../enums/common/Perks.js";
import Birthrights from "../../enums/offspring/Birthrights.js";
import Lores from "../../enums/common/Lores.js"
import Offspring from "../Offspring.js";

export default class Mystic extends Offspring {
    static MYSTICAL_BIRTHRIGHTS = [Birthrights.CAMBION, Birthrights.CARPDREAMT, Birthrights.CAULBORN, Birthrights.CHANGELING, Birthrights.CORPSEKIN];
    
    constructor(birthright, excludedPerks, excludedPaths) {
        super(randomStats(), randomFromObject(Perks, excludedPerks), randomFromObject(Paths, excludedPaths), birthright)

        this.startingAbilities = this.generateStartingAbilities(this);
        this.startingLores = this.getMysticLores(this);
        this.startingCantrips = this.getMysticCantrips(this.startingLores);
    }

    static getInstance() {
        let birthright = randomFromObject(Birthrights, [], Mystic.MYSTICAL_BIRTHRIGHTS);
        let excludedPerks = birthright.excludedPerks;
        let excludedPaths = birthright.excludedPaths;

        return new Mystic(birthright, excludedPerks, excludedPaths);
    }

    getMysticLores(mystic) {
        let startingLores = new Set();
        let validLores = mystic.birthright.permittedLores;
        
        do {
            startingLores.add(randomFromObject(Lores, [], validLores));
        } while (startingLores.size < 2);

        // Return Sets as Arrays
        return Array.from(startingLores);

        }
    
    getMysticCantrips(startingLores) {
        let startingCantrips = new Set();

        for (const lore of startingLores) {
            let cantrips = lore.abilities;
            let firstCantrip = randomStringFromArray(cantrips);
            let secondCantrip = randomStringFromArray(cantrips);
            while (secondCantrip == firstCantrip) {
                secondCantrip = randomStringFromArray(cantrips);
            }
            startingCantrips.add(firstCantrip);
            startingCantrips.add(secondCantrip);
        }
        
        return Array.from(startingCantrips);
    }

    toString() {
        let output = "Type: Offspring (Eventide)\n";
        output += `Path: ${this.path.name} (${this.path.source})\n`;
        output += `Birthright: ${this.birthright.name} (${this.birthright.source})\n`;
        output += `   Birthright Perk: ${this.birthrightPerk}\n`;
        output += `Perk: ${this.perk.name} (${this.perk.source})\n`;
        output += `Legacy: ${this.legacy}\n`;
        output += `Starting Lores: ${this.startingLores.map(lore => `${lore.name} (${lore.source})`).join(", ")}\n`;
        output += `Starting Cantrips: ${this.startingCantrips.join(", ")}\n`;   
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
        output += `<p><strong>Type:</strong> Offspring (Eventide)</p>`;
        output += `<p><strong>Path:</strong> ${this.path.name} (${this.path.source})</p>`;
        output += `<p><strong>Birthright:</strong> ${this.birthright.name} (${this.birthright.source})</p>`;
        output += `<p><strong>Birthright Perk:</strong> ${this.birthrightPerk}</p>`;
        output += `<p><strong>Perk:</strong> ${this.perk.name} (${this.perk.source})</p>`;
        output += `<p><strong>Legacy:</strong> ${this.legacy}</p>`;
        output += `<p><strong>Starting Lores:</strong> ${this.startingLores.map(lore => `${lore.name} (${lore.source})`).join(", ")}</p>`;
        output += `<p><strong>Starting Cantrips:</strong> ${this.startingCantrips.join(", ")}</p>`;
        output += `<p><strong>Starting Abilities:</strong> ${this.startingAbilities.join(", ")}</p>`;

        output += "<section class='stats'>";
        output += "<h3>STATS:</h3>";
        output += `<p><strong>Might:</strong> ${this.might}</p>`;
        output += `<p><strong>Agility:</strong> ${this.agility}</p>`;
        output += `<p><strong>Wits:</strong> ${this.wits}</p>`;
        output += `<p><strong>Heart:</strong> ${this.heart}</p>`;
        output += `<p><strong>Poise:</strong> ${this.poise}</p>`;
        output += "</section></section>";

        return output;
    }

}