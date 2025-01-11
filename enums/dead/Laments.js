"use strict";

import SourceBooks from "../common/SourceBooks.js";

const Laments = Object.freeze({
    DESPAIR: {
        name: "Despair",
        source: SourceBooks.MURK,
        startingAbility: "Beast of Despair",
        abilities: Object.freeze([
            "Almost Home",
            "Aura of Hurt",
            "I'll Take That",
            "I've Already Been There",
            "Paths of Loss",
            "Uncomfortable Pain",
            "Whispers of Support"])
    },
    DOOM: {
        name: "Doom",
        source: SourceBooks.MURK,
        startingAbility: "Flipped Omen",
        abilities: Object.freeze([
            "Sense The Doomed",
            "Death by Exposure",
            "Foul Odds",
            "Heads Then Tails",
            "Ominous Foresight",
            "St. Elmo’s Fire",
            "Tempt Fate"])
    },
    FORGETTING: {
        name: "Forgetting",
        source: SourceBooks.MURK,
        startingAbility: "Missing Moon",
        abilities: Object.freeze([
            "Cruel Kindness",
            "A Forgettable Absence",
            "Dead Inside",
            "Gone",
            "Loopback",
            "Nothing Important",
            "Wash Out"])
    },
    GRIEF: {
        name: "Grief",
        source: SourceBooks.MURK,
        startingAbility: "Caladrius",
        abilities: Object.freeze([
            "Tear-Stained Eyes",
            "Charm of Stolen Moments",
            "Contagion of Mourning",
            "Keening Paralysis",
            "Premonition of Loss",
            "Rain of Tears",
            "Travel Beyond Grief"])
    },
    HUNGER: {
        name: "Hunger",
        source: SourceBooks.MURK,
        startingAbility: "The Black Beast",
        abilities: Object.freeze([
            "Circle of Death",
            "Feed on the Spectral",
            "Feral Debt",
            "Gnawing Hunger",
            "Hungry and Alert",
            "Legacy of the Bite",
            "Track by Taste"])
    },
    OBLIGATION: {
        name: "Obligation",
        source: SourceBooks.MURK,
        startingAbility: "Soul Beacon",
        abilities: Object.freeze([
            "At Your Service",
            "Into the Breach",
            "Pledge Our Souls",
            "Soldier to the Left",
            "Spectral Comms",
            "Spirit de Corps",
            "Through the Trenches"])
    },
    PEACE: {
        name: "Peace",
        source: SourceBooks.MURK,
        startingAbility: "Redemptive Fall",
        abilities: Object.freeze([
            "Defanged Spirit",
            "Found",
            "Help of Small Hands",
            "Peace of the Dead",
            "Quiet Goodbye",
            "Through the Valley",
            "Wisdom of Death"])
    },
    SACRIFICE: {
        name: "Sacrifice",
        source: SourceBooks.MURK,
        startingAbility: "The Empty Tomb",
        abilities: Object.freeze([
            "Bloody Burden",
            "Bought with Flesh",
            "Cadmean Gambit",
            "Debt Assumed",
            "Ram of Moriah",
            "Sacrificial Promise",
            "Worth the Price"])
    },
    VENGEANCE: {
        name: "Vengeance",
        source: SourceBooks.MURK,
        startingAbility: "Eidolon's View",
        abilities: Object.freeze([
            "Blood-Stained Vision",
            "Hard to Kill",
            "'Kill Me Once, Shame On Me'",
            "Seeker of Guilt",
            "Strength of Revenge",
            "Unstoppable Revenant",
            "Vengeful Pursuit"])
    },
    WARNING: {
        name: "Warning",
        source: SourceBooks.MURK,
        startingAbility: "Eyes in the Dark",
        abilities: Object.freeze([
            "Broken Flesh",
            "Can't Outrun Fate",
            "Go Limp",
            "Grotesquerie",
            "Learn From My Mistake",
            "Misery Loves Company",
            "Saw it Coming"])
    }

});

export default Laments;