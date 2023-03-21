
const attributeValue = {
    HP: [
        209.13,
        239.00,
        268.88,
        298.75,
    ],
    HP_Percentage: [
        0.0408,
        0.0466,
        0.0525,
        0.0583,
    ],
    ATK: [
        13.6,
        15.6,
        17.5,
        19.5,
    ],
    ATK_Percentage:[
        0.0408,
        0.0466,
        0.0525,
        0.0583,
    ],
    DEF:[
        16.2,
        18.5,
        20.8,
        23.2,
    ],
    DEF_Percentage:[
        0.0510,
        0.0583,
        0.0656,
        0.0729,
    ],
    CRIT_Rate:[
        0.0272,
        0.0311,
        0.0350,
        0.0389,
    ],
    CRIT_DMG:[
        0.0544,
        0.0622,
        0.0699,
        0.0777,
    ],
    Elemental_Mastery:[
        16.3,
        18.7,
        21.0,
        23.3,
    ],
    Energy_Recharge:[
        0.0453,
        0.0518,
        0.0583,
        0.0648,
    ],
}

const ArtifactType = {
    Flower: 0,
    Cup: 1,
}

class Artifact {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.attribute = [];
    }

    static getEmptySet() {
        return {
            flower_of_life: undefined,
            plume_of_death: undefined,
            sands_of_eon: undefined,
            goblet_of_eonothem: undefined,
            circlet_of_logos: undefined,
        };
    }
}

export default Artifact;
