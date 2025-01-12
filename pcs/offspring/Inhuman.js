"use strict";

import { randomFromObject, randomStats, randomStringFromArray } from "../../utils/CharacterUtils.js";
import Paths from "../../enums/common/Paths.js";
import Perks from "../../enums/common/Perks.js";
import Birthrights from "../../enums/offspring/Birthrights.js";
import InhumanQualities from "../../enums/offspring/InhumanQualities.js";
import InhumanWeaknesses from "../../enums/offspring/InhumanWeakness.js";
import Offspring from "../Offspring.js";
import { getSelectedBooks } from "../../utils/checkbox.js";

export default class Inhuman extends Offspring {
    static INHUMAN_BIRTHRIGHTS = [Birthrights.CALIBAN, Birthrights.CASTOFF, Birthrights.CURSED];
    
    constructor(birthright, excludedPerks, excludedPaths) {
        const selectedBooks = getSelectedBooks();

        super(randomStats(), randomFromObject(Perks, excludedPerks, [], selectedBooks), randomFromObject(Paths, excludedPaths, [], selectedBooks), birthright, selectedBooks)

        this.startingAbilities = this.generateStartingAbilities(this);

        this.updateCursedPerk(selectedBooks);

        let inhumanQualitiesandWeaknesses = this.getInhumanQualitiesAndWeaknesses(selectedBooks);
        this.inhumanQualities = Array.from(inhumanQualitiesandWeaknesses[0]);
        this.inhumanWeaknesses = Array.from(inhumanQualitiesandWeaknesses[1]);
    }

    static getInstance() {
        const selectedBooks = getSelectedBooks();
        let birthright = randomFromObject(Birthrights, [], Inhuman.INHUMAN_BIRTHRIGHTS, selectedBooks);
        let excludedPerks = birthright.excludedPerks;
        let excludedPaths = birthright.excludedPaths;

        return new Inhuman(birthright, excludedPerks, excludedPaths);
    }

    getInhumanQualitiesAndWeaknesses(selectedBooks) {
        let inhumanQualitiesSet = new Set();
        let inhumanWeaknessesSet = new Set();
        
        do {
            inhumanQualitiesSet.add(randomFromObject(InhumanQualities, [], [], selectedBooks));
        } while (inhumanQualitiesSet.size < 2);
        
        inhumanWeaknessesSet.add(this.getInhumanWeakness(inhumanWeaknessesSet, selectedBooks));
        
        if (Math.random() < 0.5) {
            do {
                inhumanQualitiesSet.add(randomFromObject(InhumanQualities, [], [], selectedBooks));
            } while (inhumanQualitiesSet.size < 3);

                do {
                    inhumanWeaknessesSet.add(this.getInhumanWeakness(inhumanWeaknessesSet));
                } while (inhumanQualitiesSet.size < 2);
            
        }
    
        return [Array.from(inhumanQualitiesSet), Array.from(inhumanWeaknessesSet)];
    }
    
    getInhumanWeakness(inhumanWeaknessesSet, selectedBooks) {
        let inhumanWeakness;
        if (this.birthright == Birthrights.CASTOFF) {
            inhumanWeakness = randomFromObject(InhumanWeaknesses, InhumanWeaknesses.TRULY_HIDEOUS, [], selectedBooks);
        } else {
            inhumanWeakness = randomFromObject(InhumanWeaknesses, [], [], selectedBooks);
        }
        inhumanWeaknessesSet.add(inhumanWeakness);
        return inhumanWeakness;
    }

    updateCursedPerk(selectedBooks) {
        this.excludedPerks = this.excludedPerks || [];
    
        if (this.birthrightPerk == "Puca-Bitten") {
            this.excludedPerks.push(Perks.FAMILIAR, Perks.SIDHE);
        } else {
            this.excludedPerks.push(Perks.NECROMANCER);
        }
    
        if (this.excludedPerks.includes(this.perk)) {
            this.perk = randomFromObject(Perks, this.excludedPerks, [], selectedBooks);
        }
    }

    toString() {
        let output = "Type: Offspring (Eventide)\n";
        output += `Path: ${this.path.name} (${this.path.source})\n`;
        output += `Birthright: ${this.birthright.name} (${this.birthright.source})\n`;
        output += `   Birthright Perk: ${this.birthrightPerk}\n`;
        output += `Perk: ${this.perk.name} (${this.perk.source})\n`;
        output += `Legacy: ${this.legacy}\n`;
        output += `Inhuman Qualities: ${this.inhumanQualities.join(", ")}\n`;
        output += `Inhuman Weaknesses: ${this.inhumanWeaknesses.join(", ")}\n`;
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
        output += `<p><strong>Inhuman Qualities:</strong> ${this.inhumanQualities.join(", ")}</p>`;
        output += `<p><strong>Inhuman Weaknesses:</strong> ${this.inhumanWeaknesses.join(", ")}</p>`;
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