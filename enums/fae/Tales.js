"use strict";

import SourceBooks from "../common/SourceBooks.js";

const Tales = Object.freeze({
    ARTISTRY: {
        name: "Artistry",
        source: SourceBooks.CORE,
        startingAbility: "Quicksilver Craftsman",
        abilities: Object.freeze([
            "Godmother's Loan",
            "Hold Together",
            "Just A Bauble",
            "A Piece of Wood",
            "Restoration of Venus",
            "Treasuresmith",
            "Whiskers and Feathers"])
    },
    FURY: {
        name: "Fury",
        source: SourceBooks.CORE,
        startingAbility: "Fueled By Anger",
        abilities: Object.freeze([
            "Claws and Fangs",
            "Furiously Fast",
            "Painful Wounds",
            "The Prey's Scent",
            "Shieldbreaker",
            "Sound and Fury",
            "Wolf Among Sheep"])
    },
    GLORY: {
        name: "Glory",
        source: SourceBooks.CORE,
        startingAbility: "Voice of Glory",
        abilities: Object.freeze([
            "The Chain of Command",
            "Fool's Gold",
            "Into The Mouth Of Hell",
            "King Over All The Children Of Pride",
            "Face the Dragon",
            "Noblesse Oblige",
            "Zero to Hero"])
    },
    INNOCENCE: {
        name: "Innocence",
        source: SourceBooks.CORE,
        startingAbility: "Strength of the Small",
        abilities: Object.freeze([
            "The Cub's Cry",
            "Heart of the Land",
            "Out of the Woods",
            "Rose and Snow",
            "Two Small Hearts",
            "The Whole World Is A Garden",
            "Wild Child"])
    },
    LOVE: {
        name: "Love",
        source: SourceBooks.CORE,
        startingAbility: "The Heart Knows",
        abilities: Object.freeze([
            "Beneath the Window",
            "Entwined Souls",
            "The Family You Choose",
            "Hot Mess",
            "Just A Kiss",
            "Lovesworn Champion",
            "Walk Barefoot To Palestine"])
    },
    MALEDICTION: {
        name: "Malediction",
        source: SourceBooks.CORE,
        startingAbility: "Don't Cross Me",
        abilities: Object.freeze([
            "Albatross About My Neck",
            "A Little Fire",
            "The Crossroads",
            "Devil In The Dark",
            "Meat For The Dogs",
            "On That Farm",
            "Spidertongue"])
    },
    MISCHIEF: {
        name: "Mischief",
        source: SourceBooks.CORE,
        startingAbility: "Rogue",
        abilities: Object.freeze([
            "Nose For Trouble",
            "Allergic To Restraint",
            "Cast Image",
            "Fun With Friends",
            "Hole In My Pocket",
            "Just A Leaf",
            "Not Myself"])
    },
    MYSTERY: {
        name: "Mystery",
        source: SourceBooks.CORE,
        startingAbility: "Glowing Strands",
        abilities: Object.freeze([
            "A Dead Silence Fell",
            "Eye of Fate",
            "Foreshadow Of Doom",
            "Heart of the Wood",
            "The Secret Fire",
            "Rewoven",
            "The Well of Mimir"])
    },
    SORROW: {
        name: "Sorrow",
        source: SourceBooks.CORE,
        startingAbility: "Heartache",
        abilities: Object.freeze([
            "Dignity of the Lost",
            "Guilty Hearts",
            "Instant Regret",
            "Lostsong",
            "Memory of Pain",
            "Sobering Truth",
            "Waves and the Shore"])
    },
    TERROR: {
        name: "Terror",
        source: SourceBooks.CORE,
        startingAbility: "It's Out There, Somewhere",
        abilities: Object.freeze([
            "Shadow-Walker",
            "Chitinous Flesh",
            "To Creep, Unimpeded",
            "Horrifying Gaze",
            "Cephalopodic Grace",
            "Mark of the Predator",
            "Unspeakable Horror"])
    },
    DAMNATION: {
        name: "Damnation",
        source: SourceBooks.MURK,
        startingAbility: "To Reign",
        abilities: Object.freeze([
            "Broken Not Bowed",
            "Deadly Disfigurement",
            "Face of the Fallen",
            "Hated and Desired",
            "Remnant Allure",
            "Shattered Beauty",
            "The Host"])
    },
    FATE: {
        name: "Fate",
        source: SourceBooks.MURK,
        startingAbility: "A Pale Horse",
        abilities: Object.freeze([
            "Bertilak's Blow",
            "Geas",
            "Kleiduchos",
            "Prophesized Doom",
            "So It Was Spoken",
            "Something Wicked This Way Comes",
            "Wild Hunt"])
    }

});

export default Tales;