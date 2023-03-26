import Artifact from "./artifact.js";

class Character {
    constructor() {
        this.max_hit_point = undefined;
        this.base_attack = undefined;
        this.base_defence = undefined;
        this.energy_recharge = undefined;
        this.elemental_mastery = undefined;
        this.critical = new Critical();
        this.healing_bonus = undefined;
        this.incoming_healing_bonus = undefined;
        this.cool_down_reduction = undefined;
        this.shield_strength = undefined;
        this.elemental_stats = new ElementalStats();
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
        this.damage_bonus = getElementSet();
        this.resistance = getElementSet();
    }
}

function getElementSet() {
    return {
        pyro: 0,
        hydro: 0,
        dendro: 0,
        electro: 0,
        anemo: 0,
        cryo: 0,
        geo: 0,
        pysical: 0
    }
}

export default Character;
