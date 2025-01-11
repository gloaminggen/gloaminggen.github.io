// Paths.js
"use strict";

import SourceBooks from './SourceBooks.js';

const Paths = Object.freeze({
    ELDER: {
        name: "Elder",
        source: SourceBooks.CORE,
        startingAbility: "Familiar Face",
        abilities: Object.freeze(["Full Garage",
            "A Bad Feeling",
            "Don't Sleep Much",
            "Harmless Ol' Git",
            "I've Seen This Before",
            "Not Surprised Anymore",
            "Old Soul"])
    },
    EXPLORER: {
        name: "Explorer",
        source: SourceBooks.CORE,
        startingAbility: "Direction Sense",
        abilities: Object.freeze(["Can I Eat This?",
            "Lifesaving Reflexes",
            "Never Unfamiliar",
            "Outdoor Enthusiast",
            "Rugged",
            "What Was Left Behind",
            "Wonder of the World"])
    },

    HEDONIST: {
        name: "Hedonist",
        source: SourceBooks.CORE,
        startingAbility: "Built-Up Resistance",
        abilities: Object.freeze(["Always At Home",
            "Forget Your Pain",
            "I'll Pass",
            "Joyful",
            "Party Person",
            "Run From Authority",
            "The Stash"])
    },

    HERMIT: {
        name: "Hermit",
        source: SourceBooks.CORE,
        startingAbility: "Off The Grid",
        abilities: Object.freeze(["Don't Care Much",
            "Accustomed to Silence",
            "Caches",
            "Grit",
            "Quiet Strength",
            "Plenty of Time To Read",
            "Self-Sufficient"])
    },
            
    HUNTER: {
        name: "Hunter",
        source: SourceBooks.CORE,
        startingAbility: "Leave No Trail",
        abilities: Object.freeze(["Animal Call",
            "Beast-wise",
            "Calm the Beast",
            "Live off the Land",
            "Silent and Still",
            "Shoot to Kill",
            "Trusty Companion"])
    },
        
    LOVER: {
        name: "Lover",
        source: SourceBooks.CORE,
        startingAbility: "Lovable",
        abilities: Object.freeze(["I Believe In You",
            "Ineffable Connection",
            "Kiss Me",
            "Lovefool",
            "Seeker of Consent",
            "Sensitive",
            "Snake Dance"])
    },

    OUTLAW: {
        name: "Outlaw",
        source: SourceBooks.CORE,
        startingAbility: "Rough",
        abilities: Object.freeze(["Ambusher",
            "Don't Try Me",
            "I Know A Guy",
            "Planned For That",
            "Heist Meister",
            "Takes One To Know One",
            "We Go Way Back"])
    },
            
    PERSECUTED: {
        name: "Persecuted",
        source: SourceBooks.CORE,
        startingAbility: "Sanctuary",
        abilities: Object.freeze(["Alert",
            "Daring",
            "Grin and Bear It",
            "Hidden",
            "Outside View",
            "Survivor",
            "Tight-Knit"])
    },

    SEEKER: {
        name: "Seeker",
        source: SourceBooks.CORE,
        startingAbility: "Strange Lore",
        abilities: Object.freeze(["The Archives",
            "Conspiracy Theorists",
            "Crazy Wall",
            "Government Records",
            "Nightmare Radio",
            "Panicked Run",
            "Special Detectors"])
    },
    
    WITCH: {
        name: "Witch",
        source: SourceBooks.CORE,
        startingAbility: "Herblore",
        abilities: Object.freeze(["Beasttongue",
            "Dark Rumors",
            "Moonwise",
            "Old Wisdom",
            "Potioncraft",
            "Relic",
            "Weatherwise"])
    },
                
    CHANGELING: {
        name: "Changeling",
        source: SourceBooks.VESPERS,
        startingAbility: "Those Elven Eyes",
        abilities: Object.freeze(["Child of Envy",
            "De-Glamoured",
            "Fairy Kiss",
            "Fairy Ring (Changeling)",
            "It's All Real",
            "Silent Steps",
            "Touch of Immortality"])
    },

    LAW: {
        name: "Law",
        source: SourceBooks.VESPERS,
        startingAbility: "A Badge and a Gun",
        abilities: Object.freeze(["Honed Instincts",
            "Informants",
            "The Matador",
            "No Backup",
            "Smell The Guilty",
            "Tracker",
            "You're Deputized"])
    },
        
    PUNK: {
        name: "Punk",
        source: SourceBooks.VESPERS,
        startingAbility: "Resist!",
        abilities: Object.freeze(["Bloody Smile",
            "Breaking and Entering",
            "Damn the Man",
            "Eff You",
            "Fashion Icon",
            "I Do What I Want",
            "Scatter!"])
    },
                    
    RUNAWAY: {
        name: "Runaway",
        source: SourceBooks.VESPERS,
        startingAbility: "Secret Bank Account",
        abilities: Object.freeze(["Diffusing Tension",
            "Expensive Education",
            "Just Walk Away",
            "Lie Detector",
            "Socialite",
            "Wind in My Hair",
            "You Don't Own Me"])
    },

    SLEEPWALKER: {
        name: "Sleepwalker",
        source: SourceBooks.VESPERS,
        startingAbility: "Sleepwalking",
        abilities: Object.freeze(["Dreamgate",
            "Exhausted",
            "Insomniac Browsing",
            "Mare",
            "Nightmare Stories",
            "Somnambulist Crafting",
            "Veiled in Dreams"])
    },
        
    MEDIUM: {
        name: "Medium",
        source: SourceBooks.MURK,
        startingAbility: "Séance",
        abilities: Object.freeze(["Choose Me",
            "Cold Reading",
            "Confidants",
            "Inheritance",
            "Smoke and Mirrors",
            "Soul Echo",
            "The Cards Know"])
    },
                    
    POET: {
        name: "Poet",
        source: SourceBooks.MURK,
        startingAbility: "My Muse",
        abilities: Object.freeze(["Existential Angst",
            "It's A Gift",
            "'O Captain, My Captain!'",
            "Power of Imagination",
            "Sensitive Soul",
            "Soothing Art",
            "Uncanny Likeness"])
    },
    
    PRIEST: {
        name: "Priest",
        source: SourceBooks.MURK,
        startingAbility: "Communion",
        abilities: Object.freeze(["Come Down to the Water to Pray",
            "Confessor",
            "Deliverance",
            "Exorcism",
            "In Memoriam",
            "Shield of Faith",
            "Snake Handling"])
    },
            
    RESURRECTED: {
        name: "Resurrected",
        source: SourceBooks.MURK,
        startingAbility: "Dead Unlike Me",
        abilities: Object.freeze(["Calm of the Grave",
            "My Future and Past",
            "Not My First Time",
            "Shade",
            "Taste of Death",
            "Uncanny Sense",
            "What Comes Next"])
    },
                        
    VESSEL: {
        name: "Vessel",
        source: SourceBooks.MURK,
        startingAbility: "Locked Door",
        abilities: Object.freeze(["Alien Tongues",
            "Creeping Awareness",
            "Empty Feeling",
            "Flash of Recognition",
            "Memory of Another",
            "Never Again",
            "Not my Heart"])
    },  
        
    BRIAR: {
        name: "Briar",
        source: SourceBooks.DUSK,
        startingAbility: "Thorn-Scarred",
        abilities: Object.freeze(["Blood Shed Together",
            "Bramble Blessed",
            "Earnest Purpose",
            "Over or Through",
            "Pushing On",
            "Take the Plunge",
            "Undeterred"])
    },   
        
    EX_CULTIST: {
        name: "Ex-Cultist",
        source: SourceBooks.DUSK,
        startingAbility: "Well-Armed",
        abilities: Object.freeze(["Deprogrammed",
            "Hard-Hearted",
            "Hidden Truth",
            "Lines of Power",
            "Nothing Sacred",
            "Out of Sight",
            "Shadow Network"])
    },
    
    FADING: {
        name: "Fading",
        source: SourceBooks.DUSK,
        startingAbility: "A Full Life",
        abilities: Object.freeze(["Leave It Better",
            "Fragile Spirit",
            "Death With Meaning",
            "Patient Scavengers",
            "Final Respects",
            "Thin Veil",
            "Remember Me"])
    },
            
    PREPPER: {
        name: "Prepper",
        source: SourceBooks.DUSK,
        startingAbility: "Retreat",
        abilities: Object.freeze(["Bug-Out Bag",
            "Bug-Out Vehicle",
            "Cardio",
            "In The Know",
            "Medical Training",
            "Panic Room",
            "Paranoid"])
    },
                        
    WOODCUTTER: {
        name: "Woodcutter",
        source: SourceBooks.DUSK,
        startingAbility: "The Woodcutter's Axe",
        abilities: Object.freeze(["Tree Topper",
            "Master Feller",
            "Dangerous Lifestyle",
            "Logger Tough",
            "Lumbersexual",
            "Wolf and Red",
            "Wolf Pelt"])
    },
        
    CRAFTER: {
        name: "Crafter",
        source: SourceBooks.EVENTIDE,
        startingAbility: "Inspired Crafter",
        abilities: Object.freeze(["Toolmaker",
            "Holds The Room Together",
            "Bringing Nature Inside",
            "Strengthened Craft",
            "Sturdy Soul",
            "Maker Space",
            "Comforting Hearth"])
    },
                
    FISHER: {
        name: "Fisher",
        source: SourceBooks.EVENTIDE,
        startingAbility: "Nemesis (Obsession)",
        abilities: Object.freeze(["Calming Gossip",
            "Fish and Loaves",
            "Just a Boot",
            "Moment of Zen (Obsession)",
            "Scarred Pride (Obsession)",
            "Vow to Overcome (Obsession)",
            "Weather Eye"])
    },
                            
    HARVESTER: {
        name: "Harvester",
        source: SourceBooks.EVENTIDE,
        startingAbility: "Truffler (Forage)",
        abilities: Object.freeze(["Medicinal (Forage)",
            "Psychadelic (Forage)",
            "Ring of Mushrooms (Forage)",
            "Quiet Listening",
            "Canvassed Woods",
            "Wild Bounty",
            "Relaxing Meal"])
    },  
            
    HERDER: {
        name: "Herder",
        source: SourceBooks.BELEVENTIDETANE,
        startingAbility: "Shepherd",
        abilities: Object.freeze(["Carries the Lamb",
            "Come After Me",
            "Cry Wolf",
            "Lost Lamb",
            "Over The Cliff",
            "Protect The Herd",
            "Shepherd's Flute"])
    }

    // Add additional lores here
});

export default Paths;