// CharacterUtils.js

import Lores from "../enums/common/Lores.js";
import Gloamspun from "../pcs/Gloamspun.js";
import SourceBooks from "../enums/common/SourceBooks.js";
import { getSelectedBooks } from "./checkbox.js";

export function randomStats() {
    const stats = [1, 1, 1, 1, 1];
    let remainingPoints = 8;
    
    while (remainingPoints > 0) {
        let statIndex = Math.floor(Math.random() * stats.length);

        if (stats[statIndex] < 4) {
            stats[statIndex]++;
            remainingPoints--;
        }
    }
    return stats;
}

export function randomStringFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}


export function randomFromObject(object, exclusions = [], inclusions = [], selectedBooks = []) {
    let objectValues = Object.values(object);
    
    // Exclude items based on the exclusions array
    if (exclusions.length > 0) {
        objectValues = objectValues.filter(value => !exclusions.includes(value));
    }
    
    // Include only items based on the inclusions array (if provided)
    if (inclusions.length > 0) {
        objectValues = objectValues.filter(value => inclusions.includes(value));
    }

    // Handle filtering based on sourceBooks, if the object has a 'source' property
    if (selectedBooks.length > 0) {
        objectValues = objectValues.filter(value => {
            // Only check 'source' if it exists on the object
            return value.source ? selectedBooks.includes(value.source) : true;
        });
    }

    const randomIndex = Math.floor(Math.random() * objectValues.length);
    return objectValues[randomIndex];
}




