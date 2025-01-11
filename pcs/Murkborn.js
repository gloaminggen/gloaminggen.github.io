"use strict";

import { randomFromObject, randomStringFromArray } from "../utils/CharacterUtils.js";
import { randomStats } from "../utils/CharacterUtils.js";
import Perks from "../enums/common/Perks.js";
import Lores from "../enums/common/Lores.js";
import Paths from "../enums/common/Paths.js";
import Laments from "../enums/dead/Laments.js";
import Eidolons from "../enums/dead/Eidolons.js";
import Lodges from "../enums/dead/Lodges.js";
import PlayerCharacter from "./PlayerCharacter.js";
import SourceBooks from "../enums/common/SourceBooks.js";

export default class Murkborn extends PlayerCharacter {
    static EXCLUDED_PERKS = [Perks.FAMILIAR, Perks.SIDHE, Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP];
    static INCLUDED_LORES =  [Lores.BEYOND,Lores.PLASM,Lores.NOISE,Lores.SALT,Lores.ASH]; 
    static SOURCE = SourceBooks.MURK;
    
    constructor() {
        super(randomStats(), randomFromObject(Perks, Murkborn.EXCLUDED_PERKS), randomFromObject(Paths));
        this.lament = randomFromObject(Laments);
        this.eidolon = randomFromObject(Eidolons);
        this.lodge = randomFromObject(Lodges);
        this.lore = randomFromObject(Lores, [], Murkborn.INCLUDED_LORES);

        this.startingAbilities = this.generateStartingAbilities(this);
    }

    addChildAbilities(startingAbilities, murkborn) {
        let lament = murkborn.lament;
        let lore = murkborn.lore;

        startingAbilities.push(lament.startingAbility);

        let secondLamentAbility = randomStringFromArray(lament.abilities)
        startingAbilities.push(secondLamentAbility);

        let startCantrip = randomStringFromArray(lore.abilities);
        startingAbilities.push(startCantrip);

        return startingAbilities;
    }

    toString() {
        let output = "Type: Murkborn (Murk)\n";
        output += `Path: ${this.path.name} (${this.path.source})\n`;
        output += `Lament: ${this.lament.name} (${this.lament.source})\n`;
        output += `Perk: ${this.perk.name} (${this.perk.source})\n`;
        output += `Eidolon: ${this.eidolon}\n`;
        output += `Lodge: ${this.lodge}\n`;
        output += `Starting Lore: ${this.lore.name} (${this.lore.source})\n`;
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
        output += `<p><strong>Type:</strong> Murkborn (Murk)</p>`;
        output += `<p><strong>Path:</strong> ${this.path.name} (${this.path.source})</p>`;
        output += `<p><strong>Lament:</strong> ${this.lament.name} (${this.lament.source})</p>`;
        output += `<p><strong>Perk:</strong> ${this.perk.name} (${this.perk.source})</p>`;
        output += `<p><strong>Eidolon:</strong> ${this.eidolon}</p>`;
        output += `<p><strong>Lodge:</strong> ${this.lodge}</p>`;
        output += `<p><strong>Starting Lore:</strong> ${this.lore.name} (${this.lore.source})</p>`;
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