function valueSet(v07, v08, v09, v10) {
    return {
        [1]: v07,
        [2]: v08,
        [3]: v09,
        [4]: v10,
    }
}

const attribute = {
    HP: valueSet(
        209.13,
        239.00,
        268.88,
        298.75,
    ),
    HP_Rate: valueSet(
        0.0408,
        0.0466,
        0.0525,
        0.0583,
    ),
    ATK: valueSet(
        13.6,
        15.6,
        17.5,
        19.5,
    ),
    ATK_Rate: valueSet(
        0.0408,
        0.0466,
        0.0525,
        0.0583,
    ),
    DEF: valueSet(
        16.2,
        18.5,
        20.8,
        23.2,
    ),
    DEF_Rate: valueSet(
        0.0510,
        0.0583,
        0.0656,
        0.0729,
    ),
    CRIT_Rate: valueSet(
        0.0272,
        0.0311,
        0.0350,
        0.0389,
    ),
    CRIT_DMG: valueSet(
        0.0544,
        0.0622,
        0.0699,
        0.0777,
    ),
    Elemental_Mastery: valueSet(
        16.3,
        18.7,
        21.0,
        23.3,
    ),
    Energy_Recharge: valueSet(
        0.0453,
        0.0518,
        0.0583,
        0.0648,
    ),
}
