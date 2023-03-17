class Character {
    constructor() {
        this.max_hit_point = 0;
        this.attack = 0;
        this.defence = 0;
        this.energy_recharge = 0;
        this.elemental_mastery = 0;
        this.critical = new Critical();
        this.healing_bonus = 0;
        this.incoming_healing_bonus = 0;
        this.cd_reduction = 0;
        this.shield_strength = 0;
        this.elemental_stats = new ElementalStats();

        this.weapon = undefined;
        this.artifects = [];
    }
}

class Critical {

    static BaseVal = new Critical(0.05, 0.5);

    constructor(
        rate = Critical.BaseVal.rate,
        damage = Critical.BaseVal.damage
    ) {
        this.rate = rate;
        this.damage = damage;
    }

    getExpectation() {
        return 1 + this.rate * this.damage;
    }

    toString() {
        return `Critical: { ${this.rate * 100}%, ${this.damage * 100}% }`;
    }
}

class ElementalStats {
    constructor() {
        this.bonus = {
            pyro: 0,
            hydro:0,
            dendro:0,
            electro:0,
            anemo:0,
            cryo:0,
            geo:0,
            pysical:0
        }
        this.resistance = {
            pyro: 0,
            hydro:0,
            dendro:0,
            electro:0,
            anemo:0,
            cryo:0,
            geo:0,
            pysical:0
        }
    }
}

class Artifact {
    constructor(type, set, name) {
    }


}

console.log(new Character())
