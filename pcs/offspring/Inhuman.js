"use strict";

import { randomFromObject, randomStats, randomStringFromArray } from "../../utils/CharacterUtils.js";
import Paths from "../../enums/common/Paths.js";
import Perks from "../../enums/common/Perks.js";
import Birthrights from "../../enums/offspring/Birthrights.js";
import InhumanQualities from "../../enums/offspring/InhumanQualities.js";
import InhumanWeaknesses from "../../enums/offspring/InhumanWeakness.js";
import Offspring from "../Offspring.js";

export default class Inhuman extends Offspring {
    static INHUMAN_BIRTHRIGHTS = [Birthrights.CALIBAN, Birthrights.CASTOFF, Birthrights.CURSED];
    
    constructor(birthright, excludedPerks, excludedPaths) {
        super(randomStats(), randomFromObject(Perks, excludedPerks), randomFromObject(Paths, excludedPaths), birthright)

        this.startingAbilities = this.generateStartingAbilities(this);

        let inhumanQualitiesandWeaknesses = this.getInhumanQualitiesAndWeaknesses();
        this.inhumanQualities = Array.from(inhumanQualitiesandWeaknesses[0]);
        this.inhumanWeaknesses = Array.from(inhumanQualitiesandWeaknesses[1]);
    }

    static getInstance() {
        let birthright = randomFromObject(Birthrights, [], Inhuman.INHUMAN_BIRTHRIGHTS);
        let excludedPerks = birthright.excludedPerks;
        let excludedPaths = birthright.excludedPaths;

        return new Inhuman(birthright, excludedPerks, excludedPaths);
    }

    getInhumanQualitiesAndWeaknesses() {
        let inhumanQualitiesSet = new Set();
        let inhumanWeaknessesSet = new Set();
        
        do {
            inhumanQualitiesSet.add(randomFromObject(InhumanQualities));
        } while (inhumanQualitiesSet.size < 2);
        
        inhumanWeaknessesSet.add(this.getInhumanWeakness(inhumanWeaknessesSet));
        
        if (Math.random() < 0.5) {
            do {
                inhumanQualitiesSet.add(randomFromObject(InhumanQualities));
            } while (inhumanQualitiesSet.size < 3);

                do {
                    inhumanWeaknessesSet.add(this.getInhumanWeakness(inhumanWeaknessesSet));
                } while (inhumanQualitiesSet.size < 2);
            
        }
    
        // Return Sets as Arrays
        return [Array.from(inhumanQualitiesSet), Array.from(inhumanWeaknessesSet)];
    }
    
    getInhumanWeakness(inhumanWeaknessesSet) {
        let inhumanWeakness;
        if (this.birthright == Birthrights.CASTOFF) {
            inhumanWeakness = randomFromObject(InhumanWeaknesses, InhumanWeaknesses.TRULY_HIDEOUS);
        } else {
            inhumanWeakness = randomFromObject(InhumanWeaknesses);
        }
        inhumanWeaknessesSet.add(inhumanWeakness);
        return inhumanWeakness;
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
        output += `<p><strong>Type:</strong> Offspring (Core)</p>`;
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