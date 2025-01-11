// test.js
"use strict";

import { randomStats } from './CharacterUtils.js';
import { randomStringFromArray } from './CharacterUtils.js';
import { randomFromObject } from './CharacterUtils.js';
import { createRandomOffspring } from './PCFactory.js';
import { getCharacter } from './PCFactory.js';
import Paths from '../enums/common/Paths.js';
import Tales from '../enums/fae/Tales.js';
import Perks from '../enums/common/Perks.js';
import Gloamspun from '../pcs/Gloamspun.js';
import Murkborn from '../pcs/Murkborn.js';
import Offspring from '../pcs/Offspring.js';
import Mystic from '../pcs/offspring/Mystic.js';
import Inhuman from '../pcs/offspring/Inhuman.js';



//let character = new Gloamspun();
//let murkborn = new Murkborn();
//console.log("----Test Gloamspun----")
//console.log(character.toString());

//console.log("----Test Murkborn----")
//console.log(murkborn.toString());

//console.log("----TestInhuman----");
//let inhuman = Inhuman.getInstance();
//console.log(inhuman.toString());

console.log("----Test Mystical Inheritance----");
let char = getCharacter("Offspring");   
console.log(char.toString());

console.log("Done");

// Create a new character
// const newCharacter = new PlayerCharacter();
//console.log(newCharacter.boostedStat);
//console.log(newCharacter.penalizedStat);

/*
let path = randomFromObject(Paths);
let tale = randomFromObject(Tales);
let perk = randomFromObject(Perks);
let stats = randomStats();

console.log("STATS:")
console.log("   Might: ", stats[0])
console.log("   Agility: ", stats[1])
console.log("   Heart: ", stats[2])
console.log("   Wits: ", stats[3])
console.log("   Poise: ", stats[4])
console.log("Path: ", path.name, "(", path.source, ")")
console.log("Tale: ", tale.name, "(", tale.source, ")")
console.log("Perk: ", perk.name, "(", perk.source, ")")
console.log("Abilities: ")
console.log("   Path:", path.startingAbility, ",", path.abilities[randomFromArray(path.abilities)])
console.log("   Tale:", tale.startingAbility, ",", tale.abilities[randomFromArray(tale.abilities)]) */