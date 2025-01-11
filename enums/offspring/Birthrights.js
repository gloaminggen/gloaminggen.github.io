"use strict";

import SourceBooks from "../common/SourceBooks.js";
import Paths from "../common/Paths.js";
import Lores from "../common/Lores.js";
import Perks from "../common/Perks.js";

const Birthrights = Object.freeze({
    CALIBAN: {
        name: "Caliban",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Prospero's Shadow",
            "Feral Flesh",
            "Hidden Away"]),
        startingAbility: "Misshapen Might",
        abilities: Object.freeze([
            "Familial Scent",
            "Guarded Deceit",
            "Memories of Sycorax",
            "Mother’s Mantle",
            "Not Honour’d With A Human Shape",
            "Servant By Choice",
            "Warren"]),
        excludedPerks: Object.freeze([Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NECROMANCER]),
        excludedPaths: Object.freeze([Paths.CHANGELING]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE])
    },
    CAMBION: {
        name: "Cambion",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Magician",
            "Prophet",
            "Shapeshifter"]),
        startingAbility: "True Sight",
        abilities: Object.freeze([
            "Cambion’s Eyes",
            "Counterspell",
            "Esplumoir",
            "Foretold",
            "Predict the Course",
            "Warder",
            "Wisdom of Demons"]),
        excludedPerks: Object.freeze([Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NECROMANCER]),
        excludedPaths: Object.freeze([Paths.CHANGELING]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE])
    },
    CARPDREAMT: {
        name: "Carpdreamt",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["The Eighth Square",
            "Cheshire Companion",
            "The Red King’s Dream"]),
        startingAbility: "Hypnagogia",
        abilities: Object.freeze([
            "Dream Manor",
            "Dream Ticket",
            "Looking Glass",
            "No Spoon",
            "Oneiromantic Osmosis",
            "Snicker-Snack",
            "Wool and Water"]),
        excludedPerks: Object.freeze([Perks.FAMILIAR, Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NECROMANCER]),
        excludedPaths: Object.freeze([]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE, Lores.BEYOND, Lores.PLASM, Lores.NOISE, Lores.ASH, Lores.QUICKSILVER, Lores.CHRYSALIS])
    },
    CASTOFF: {
        name: "Castoff",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Stunted Heritage",
            "Thick Scars",
            "Skin of Spite"]),
        startingAbility: "Hidden Past",
        abilities: Object.freeze([
            "Broken Fate",
            "Burn No More",
            "Compelling Looks",
            "Crowd of My Own",
            "Painfully Beautiful",
            "Shifting Within",
            "Skin Deep"]),
        excludedPerks: Object.freeze([Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NECROMANCER]),
        excludedPaths: Object.freeze([Paths.CHANGELING]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE])
    },
    CAULBORN: {
        name: "Caulborn",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Dead Contact",
            "Cemetery Pet",
            "Poltergeist Incident"]),
        startingAbility: "Among the Dead",
        abilities: Object.freeze([
            "Blight Immune",
            "Death Sight",
            "Fatal Replay",
            "Ghost Talker",
            "Gift of Flesh",
            "Soulspeak",
            "Sovereign Soul"]),
        excludedPerks: Object.freeze([Perks.FAMILIAR, Perks.SIDHE, Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP]),
        excludedPaths: Object.freeze([Paths.RESURRECTED, Paths.VESSEL]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.WOOD, Lores.DREAM, Lores.GOSSAMER, Lores.REVERIE, Lores.BEYOND, Lores.PLASM, Lores.NOISE, Lores.SALT, Lores.ASH])
    },
    CHANGELING: {
        name: "Changeling",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Day Kissed",
            "Night Kissed",
            "Vale Kissed"]),
        startingAbility: "Stolen Inheritance",
        abilities: Object.freeze([
            "Courtly Manners",
            "Eildon Tree",
            "Milk-White Steed",
            "Never Going Back",
            "Starbrow",
            "Tiend of Hell",
            "Tongue That Can Never Lie"]),
        excludedPerks: Object.freeze([Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NOBLE_BASTARD, Perks.NECROMANCER]),
        excludedPaths: Object.freeze([Paths.CHANGELING]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE])
    },
    CORPSEKIN: {
        name: "Corpsekin",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Dark Might",
            "Feral Blood",
            "Living Shadow"]),
        startingAbility: "Blood Drinker",
        abilities: Object.freeze([
            "Blood Against Blood",
            "Born To A Predator",
            "Dark Senses",
            "Frightening Speed",
            "Shadow Step",
            "Strength of the Dead",
            "Vertigo Walk"]),
        excludedPerks: Object.freeze([Perks.FAMILIAR, Perks.SIDHE, Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NOBLE_BASTARD]),
        excludedPaths: Object.freeze([Paths.RESURRECTED, Paths.VESSEL]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.WOOD, Lores.DREAM, Lores.GOSSAMER, Lores.REVERIE, Lores.BEYOND, Lores.PLASM, Lores.NOISE, Lores.ASH])
    },
    CURSED: {
        name: "Cursed",
        source: SourceBooks.EVENTIDE,
        birthrightPerks: Object.freeze(["Hound-Bitten",
            "Pridefall",
            "Puca-Bitten"]),
        startingAbility: "Savage Form",
        abilities: Object.freeze([
            "Beast’s Roar",
            "Beauty’s Kiss",
            "The Devil’s Luck",
            "Hardened Soul",
            "Home Cursed Home",
            "Ring of Trust",
            "Strength From Pain"]),
        excludedPerks: Object.freeze([Perks.DARKLING_ANCESTOR, Perks.SHROUD_SCRAP, Perks.NECROMANCER]),
        excludedPaths: Object.freeze([Paths.CHANGELING]),
        permittedLores: Object.freeze([Lores.AIR, Lores.EARTH, Lores.FIRE, Lores.WATER, Lores.DREAM, Lores.WOOD, Lores.GOSSAMER, Lores.REVERIE])
    }

});

export default Birthrights;