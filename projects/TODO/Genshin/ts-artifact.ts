enum Type {
    Flower,
    Plume,
    Sands,
    Goblet,
    Circlet,
}

enum StatNames {
    Hp,
    HpPer,
    Atk,
    AtkPer,
    Def,
    DefPer,
    PyroDmgPer,
    HydroDmgPer,
    CryoDmgPer,
    ElectroDmgPer,
    AnemoDmgPer,
    GeoDmgPer,
    DendroDmgPer,
    PhysicalDmgPer,
    ElementalMastery,
    EnergyRechargePer,
    CritRatePer,
    CritDmgPer,
    HealingBonusPer,
}

interface Stat {
    name: StatNames;
    value: number;
}

class TsArtifact {
    public name: string;
    public type: Type;
    public level: number;
    public mainStat: Stat;
    public subStats: Array<Stat>;

    public static create() {

    }
}

console.log(Type)
