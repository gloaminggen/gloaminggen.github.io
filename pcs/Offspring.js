"use strict";

import { randomFromObject } from "../utils/CharacterUtils.js";
import { randomStringFromArray } from "../utils/CharacterUtils.js";
import PlayerCharacter from "./PlayerCharacter.js";
import Legacies from "../enums/offspring/Legacies.js";

export default class Offspring extends PlayerCharacter {
    constructor(stats, perk, path, birthright) {
        if (new.target === Offspring) {
            throw new Error("Cannot instantiate abstract class 'Offspring' directly.");
        }

        super(stats, perk, path);
        this.birthright = birthright;
        this.legacy = randomFromObject(Legacies);
        this.birthrightPerk = randomStringFromArray(birthright.birthrightPerks);

        this.startingAbilities = this.generateStartingAbilities(this);
    }

    addChildAbilities(startingAbilities, offspring) {
        let birthright = offspring.birthright;

        startingAbilities.push(birthright.startingAbility);

        let secondBirthrightAbility = randomStringFromArray(birthright.abilities);
        startingAbilities.push(secondBirthrightAbility);

        return startingAbilities;
    }

    
}
