"use strict";

import SourceBooks from "./SourceBooks.js";

const Lores = Object.freeze({
    AIR: {
        name: "Air",
        source: SourceBooks.CORE,
        abilities: Object.freeze(["Astrapios", "Breath of Life", "Featherstep", "Flashstep", "Fogcaller", "Pinch", "Stormchild", "Ten Mountain Leap", "Cutting Wind"])
    },
    EARTH: {
        name: "Earth",
        source: SourceBooks.CORE,
        abilities: Object.freeze(["Arms of Vulcan", "Atlas Shrugged", "Cave Sense", "Crystal Carapace", "Holy Clay", "Mud in the Cracks", "Sifting Through Sand", "Song of the Soil", "Upthrust"])
    },
    FIRE: {
        name: "Fire",
        source: SourceBooks.CORE,
        abilities: Object.freeze(["Corona of Apollo", "Dragontongue", "Firebird Flock", "Guiding Flame", "Salamander Skin", "Salamander Song", "Spartoli", "Sunspot", "Burning Aura"])
    },
    WATER: {
        name: "Water",
        source: SourceBooks.CORE,
        abilities: Object.freeze(["Baptism of Saltwater and Blood",
            "Hoarfrost Armor",
            "Ice Snap",
            "Mertongue",
            "Mudskipper's Grace",
            "The Sea of Galilee",
            "Staff of Moses",
            "Undersea Adaptation",
            "Frozen Edge"])
    },
    WOOD: {
        name: "Wood",
        source: SourceBooks.VESPERS,
        abilities: Object.freeze(["Diana's Ward",
            "Fairy Ring (Wood)",
            "Hollow Journey",
            "One With the Wood",
            "Refuge of Pan",
            "Sacred Glade",
            "Thorn and Leaf",
            "Twisted Paths",
            "Dryad’s Embrace"])
    },
    DREAM: {
        name: "Dream",
        source: SourceBooks.VESPERS,
        abilities: Object.freeze(["Dreamlink",
            "Dreamskip",
            "Journal of False Awakening",
            "Mare's Whisper",
            "Morpheus' Gaze",
            "Manor of Somnus",
            "Passage of Hypnos",
            "Somnambulistic Arrow",
            "Imagined Whole"])
    },
    GOSSAMER: {
        name: "Gossamer",
        source: SourceBooks.CICADAS,
        abilities: Object.freeze(["Bitter Harvest",
            "Cloud of Small Wings",
            "Dew-Blessed",
            "Gossamer Strand",
            "Hanami",
            "Heartbloom",
            "Petals In My Hair",
            "Spidersong",
            "Bittersweet Jewel"])
    },
    REVERIE: {
        name: "Reverie",
        source: SourceBooks.EVENTIDE,
        abilities: Object.freeze(["Dazzle",
            "Dangerous Imagination",
            "Dream to Flesh",
            "False Image",
            "Flickering Phantoms",
            "Glow Up",
            "Other Roads",
            "Shared Daydream"])
    },
    BEYOND: {
        name: "Beyond",
        source: SourceBooks.MURK,
        abilities: Object.freeze(["Black Gate",
            "Folded Architecture",
            "Gift From Beyond",
            "Mirrorspeak",
            "Mirrorwalk",
            "Portals",
            "Space Within",
            "Twisted Light",
            "Skipped Beat"])
    },
    NOISE: {
        name: "Noise",
        source: SourceBooks.MURK,
        abilities: Object.freeze(["Electronic Voice",
            "False Sounds",
            "Ghost Trip",
            "Interference",
            "Levitation",
            "Rotting Fear",
            "Unclean House",
            "Vertigo Effect",
            "Loathsome Presence"])
    },
    PLASM: {
        name: "Plasm",
        source: SourceBooks.MURK,
        abilities: Object.freeze(["Animating Force",
            "Coating Against Dead",
            "Ectoplasmic Camouflage",
            "Glowing Paint",
            "Gunked Up",
            "Plasmic Drape",
            "Splattered Shut",
            "Sticky",
            "Ghostflame"])
    },
    SALT: {
        name: "Salt",
        source: SourceBooks.MURK,
        abilities: Object.freeze(["Draw the Rot",
            "Expel Poison",
            "Grain of Truth",
            "Lot's Wife",
            "Moongate Compass",
            "Ring of Salt",
            "Salt the Bones",
            "Sealed Room",
            "Salted Soil"])
    },
    ASH: {
        name: "Ash",
        source: SourceBooks.EVENTIDE,
        abilities: Object.freeze(["The Scent of Magic",
            "Calmed Heart",
            "Guiding Trail",
            "Perfumed Updraft",
            "Purifying Incense",
            "Ritual of Cleansing",
            "Scentless Smoke",
            "Smoke of Revelation"])
    },
    QUICKSILVER: {
        name: "Quicksilver",
        source: SourceBooks.CICADAS,
        abilities: Object.freeze(["Blink of An Eye",
            "Epiphanic Storm",
            "Eternal Minute",
            "Keepsake",
            "Lit By Stars",
            "Moonsilver Gate",
            "Quicksilver Healing",
            "Stolen Speed",
            "Mercury Retrograde"])
    },
    CHRYSALIS: {
        name: "Chrysalis",
        source: SourceBooks.CICADAS,
        abilities: Object.freeze(["Barrier",
            "Caterpillar's Dream",
            "Cicada Sleep",
            "Eyes of the Gate",
            "Outside the Chrysalis",
            "Shielding Cocoon",
            "Sleepwalker",
            "Somnus Shell",
            "Marionette Strings"])
    }
    // Add additional lores here
});

export default Lores;