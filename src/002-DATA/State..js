App.State.EntityState = class EntityState {
    constructor() 
    {
        this.Name = "Entity";
        this.Gender = App.ENUM.GENDER.OTHER;
        this.Sex = App.ENUM.SEX.NEUTER;
        this.Money = 0;

        this.HairColor = App.ENUM.COLORS.BLACK;
        this.EyeColor = App.ENUM.COLORS.BLACK;
        this.SkinColor = App.ENUM.COLORS.WHITE;

        this.CoreStats = {
            Health: 0,
            Energy: 0,
            Mood: 0,
            Fame: 0,
            Libido: 0,
        };

        this.CoreStatsXP = {
            Health: 0,
            Energy: 0,
            Mood: 0,
            Fame: 0,
            Libido: 0,
        };

        this.BodyStats = {
            Face: 0,
            Lips: 0,
            Bust: 0,
            Ass: 0,
            Waist: 0,
            Hips: 0,
            Penis: 0,
            Hair: 0,
            Height: 0,
            Balls: 0,
            Lactation: 0,
        };

        this.BodyXP = {
            Face: 0,
            Lips: 0,
            Bust: 0,
            Ass: 0,
            Waist: 0,
            Hips: 0,
            Penis: 0,
            Hair: 0,
            Height: 0,
            Balls: 0,
            Lactation: 0, 
        };
    
        this.Equipment = {
			Wig: null,
			Hat: null,
			Neck: null,
			Nipples: null,
			Bra: null,
			Corset: null,
			Panty: null,
			Stockings: null,
			Shirt: null,
			Pants: null,
			Dress: null,
			Costume: null,
			Shoes: null,
			Butt: null,
			Penis: null,
			Weapon: null
        };
        
        this.Traits = { };

        this.Flags = { };
    }
}

App.State.PlayerState = class PlayerState extends App.State.EntityState {
    constructor()
    {
        super();

        this.StandardOfLiving = 0;

        //Add PC Stats
        $.extend(true, this.CoreStats, 
            {
                Strength: 0,
                Personality: 0,
                Allure: 0,
                BrandStatus: 0,
                GuildReputation: 0,
                Hygiene: 0
            });

        $.extend(true, this.CoreStatsXP, 
            {
                Strength: 0,
                Personality: 0,
                Allure: 0,
                BrandStatus: 0,
                GuildReputation: 0,
                Hygiene: 0
            });

        //Add PC Skills
        this.Skills = {
            Teaching: 0,
            Stewardship: 0,
            Artistry: 0,
            Medicine: 0,
            Fighting: 0,
            Magic: 0,
            Dominance: 0,
            Flagellation: 0,
            Torture: 0,
            Binding: 0
        };

        this.SkillsXP = {
            Teaching: 0,
            Stewardship: 0,
            Artistry: 0,
            Medicine: 0,
            Fighting: 0,
            Magic: 0,
            Dominance: 0,
            Flagellation: 0,
            Torture: 0,
            Binding: 0
        };

        this.Inventory = [ ];
    }
}

App.State.SlaveState = class SlaveState extends App.State.EntityState {
    constructor()
    {
        super();
        //Add Slave Stats
        $.extend(true, this.CoreStats, 
            {
                Beauty: 0,
                Endurance: 0,
                Empathy: 0,
                Temperment: 0,
                Intellect: 0,
                Nature: 0,
                Pride: 0,
                Physique: 0,
                Obedience: 0,
                Fear: 0,
                Despair: 0,
                Awareness: 0,
                Taming: 0,
                Habit: 0,
                Spoil: 0,
                Devotion: 0
            });

        $.extend(true, this.CoreStatsXP, 
            {
                Beauty: 0,
                Endurance: 0,
                Empathy: 0,
                Temperment: 0,
                Intellect: 0,
                Nature: 0,
                Pride: 0,
                Physique: 0,
                Obedience: 0,
                Fear: 0,
                Despair: 0,
                Awareness: 0,
                Taming: 0,
                Habit: 0,
                Spoil: 0,
                Devotion: 0
            });

        this.Skills = {
            Maid: 0,
            Cook: 0,
            Nurse: 0,
            Secretary: 0,
            Enchantress: 0,
            Escort: 0,
            Gladiatrix: 0,
            Dancer: 0,
            Singer: 0,
            Musician: 0,
            Pet: 0,
            Pony: 0
        };

        this.SkillsXP = {
            Maid: 0,
            Cook: 0,
            Nurse: 0,
            Secretary: 0,
            Enchantress: 0,
            Escort: 0,
            Gladiatrix: 0,
            Dancer: 0,
            Singer: 0,
            Musician: 0,
            Pet: 0,
            Pony: 0
        };

    }
}