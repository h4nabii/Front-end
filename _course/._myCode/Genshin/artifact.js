import MapPool from "./MapPool.js";

const STAT = Object.freeze({
    HP: "HP",
    HP_Per: "HP%",
    ATK: "ATK",
    ATK_Per: "ATK%",
    DEF: "DEF",
    DEF_Per: "DEF%",
    Pyro_DMG_Per: "Pyro DMG%",
    Hydro_DMG_Per: "Hydro DMG%",
    Cryo_DMG_Per: "Cryo DMG%",
    Electro_DMG_Per: "Electro DMG%",
    Anemo_DMG_Per: "Anemo DMG%",
    Geo_DMG_Per: "Geo DMG%",
    Dendro_DMG_Per: "Dendro DMG%",
    Physical_DMG_Per: "Physical DMG%",
    Elemental_Mastery: "Elemental Mastery",
    Energy_Recharge_Per: "Energy Recharge%",
    CRIT_Rate_Per: "CRIT Rate%",
    CRIT_DMG_Per: "CRIT DMG%",
    Healing_Bonus_Per: "Healing Bonus%"
});

const TYPE = Object.freeze({
    Flower: "flower",
    Plume: "plume",
    Sands: "sands",
    Goblet: "goblet",
    Circlet: "circlet"
})

class Artifact {
    constructor(name, type, mainStat, subStats) {
        this.level = 0;
        this.name = name;
        this.type = type;
        this.mainStat = mainStat;
        this.subStats = subStats;
    }

    get subStatNameList() {
        return [...this.subStats.map(value => value.name)];
    }

    static get MainStatValues() {
        return new Map([
            [STAT.HP, [
                717, 920, 1123, 1326, 1530,
                1733, 1936, 2139, 2342, 2545,
                2749, 2952, 3155, 3358, 3561,
                3764, 3967, 4171, 4374, 4577, 4780
            ]],
            [STAT.ATK, [
                47, 60, 73, 86, 100,
                113, 126, 139, 152, 166,
                179, 192, 205, 219, 232,
                245, 258, 272, 285, 298, 311
            ]],
            [STAT.HP_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.ATK_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.DEF_Per, [
                8.7, 11.2, 13.7, 16.2, 18.6,
                21.1, 23.6, 26.1, 28.6, 31.0,
                33.5, 36.0, 38.5, 40.9, 43.4,
                45.9, 48.4, 50.8, 53.3, 55.8, 58.3
            ]],
            [STAT.Physical_DMG_Per, [
                8.7, 11.2, 13.7, 16.2, 18.6,
                21.1, 23.6, 26.1, 28.6, 31.0,
                33.5, 36.0, 38.5, 40.9, 43.4,
                45.9, 48.4, 50.8, 53.3, 55.8, 58.3
            ]],
            [STAT.Pyro_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Hydro_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Cryo_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Electro_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Anemo_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Geo_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Dendro_DMG_Per, [
                7.0, 9.0, 11.0, 12.9, 14.9,
                16.9, 18.9, 20.9, 22.8, 24.8,
                26.8, 28.8, 30.8, 32.8, 34.7,
                36.7, 38.7, 40.7, 42.7, 44.6, 46.6
            ]],
            [STAT.Elemental_Mastery, [
                28.0, 35.9, 43.8, 51.8, 59.7,
                67.6, 75.5, 83.5, 91.4, 99.3,
                107.2, 115.2, 123.1, 131.0, 138.9,
                146.9, 154.8, 162.7, 170.6, 178.6, 186.5
            ]],
            [STAT.Energy_Recharge_Per, [
                7.8, 10.0, 12.2, 14.4, 16.6,
                18.8, 21.0, 23.2, 25.4, 27.6,
                29.8, 32.0, 34.2, 36.4, 38.6,
                40.8, 43.0, 45.2, 47.4, 49.6, 51.8
            ]],
            [STAT.CRIT_Rate_Per, [
                4.7, 6.0, 7.3, 8.6, 9.9,
                11.3, 12.6, 13.9, 15.2, 16.6,
                17.9, 19.2, 20.5, 21.8, 23.2,
                24.5, 25.8, 27.1, 28.4, 29.8, 31.1
            ]],
            [STAT.Cryo_DMG_Per, [
                9.3, 12.0, 14.6, 17.3, 19.9,
                22.5, 25.2, 27.8, 30.5, 33.1,
                35.7, 38.4, 41.0, 43.7, 46.3,
                49.0, 51.6, 54.2, 56.9, 59.6, 62.2
            ]],
            [STAT.Healing_Bonus_Per, [
                5.4, 6.9, 8.4, 10.0, 11.5,
                13.0, 14.5, 16.1, 17.6, 19.1,
                20.6, 22.1, 23.7, 25.2, 26.7,
                28.2, 29.8, 31.3, 32.8, 34.3, 35.9
            ]]
        ]);
    }

    static get MainStatRateMap() {
        return new Map([
            [TYPE.Flower, [
                [STAT.HP, 100]
            ]],
            [TYPE.Plume, [
                [STAT.ATK, 100]
            ]],
            [TYPE.Sands, [
                [STAT.ATK_Per, 1334],
                [STAT.HP_Per, 1333],
                [STAT.DEF_Per, 1333],
                [STAT.Energy_Recharge_Per, 500],
                [STAT.Elemental_Mastery, 500],
            ]],
            [TYPE.Goblet, [
                [STAT.ATK_Per, 767],
                [STAT.HP_Per, 766],
                [STAT.DEF_Per, 767],
                [STAT.Pyro_DMG_Per, 200],
                [STAT.Hydro_DMG_Per, 200],
                [STAT.Cryo_DMG_Per, 200],
                [STAT.Electro_DMG_Per, 200],
                [STAT.Anemo_DMG_Per, 200],
                [STAT.Geo_DMG_Per, 200],
                [STAT.Dendro_DMG_Per, 200],
                [STAT.Physical_DMG_Per, 200],
                [STAT.Elemental_Mastery, 100],
            ]],
            [TYPE.Circlet, [
                [STAT.ATK_Per, 1100],
                [STAT.HP_Per, 1100],
                [STAT.DEF_Per, 1100],
                [STAT.Healing_Bonus_Per, 500],
                [STAT.CRIT_Rate_Per, 500],
                [STAT.CRIT_DMG_Per, 500],
                [STAT.Elemental_Mastery, 200],
            ]],
        ]);
    }

    static get Types() {
        return [...this.MainStatRateMap.keys()];
    }

    static get subStatValues() {
        return new Map([
            [STAT.HP, [209.13, 239.00, 268.88, 298.75]],
            [STAT.HP_Per, [0.0408, 0.0466, 0.0525, 0.0583]],
            [STAT.ATK, [13.62, 15.56, 17.51, 19.45]],
            [STAT.ATK_Per, [0.0408, 0.0466, 0.0525, 0.0583]],
            [STAT.DEF, [16.20, 18.52, 20.83, 23.15]],
            [STAT.DEF_Per, [0.0510, 0.0583, 0.0656, 0.0729]],
            [STAT.Elemental_Mastery, [16.32, 18.65, 20.98, 23.31]],
            [STAT.Energy_Recharge_Per, [0.0453, 0.0518, 0.0583, 0.0648]],
            [STAT.CRIT_Rate_Per, [0.0272, 0.0311, 0.0350, 0.0389]],
            [STAT.CRIT_DMG_Per, [0.0544, 0.0622, 0.0699, 0.0777]],
        ])
    }

    static get subStatRateMap() {
        return new Map([
            [STAT.HP, 150],
            [STAT.HP_Per, 100],
            [STAT.ATK, 150],
            [STAT.ATK_Per, 100],
            [STAT.DEF, 150],
            [STAT.DEF_Per, 100],
            [STAT.Elemental_Mastery, 100],
            [STAT.Energy_Recharge_Per, 100],
            [STAT.CRIT_Rate_Per, 75],
            [STAT.CRIT_DMG_Per, 75],
        ])
    }

    static get subStatList() {
        return [...this.subStatRateMap.keys()];
    }

    static create(setName, type, mainStat, subStats) {

        // Generate type
        type = type ?? randomSelectFrom(this.Types);

        // Generate main stat
        mainStat = mainStat ?? new MapPool(this.MainStatRateMap.get(type)).select();

        // Generate sub-stats
        if (!subStats) {
            subStats = [];

            let subStatsPool = new MapPool(this.subStatRateMap);
            subStatsPool.remove(mainStat);

            let subStatCount = Math.random() < 0.8 ? 3 : 4;

            while (subStats.length < subStatCount) {
                let subStat = subStatsPool.select();
                subStats.push({
                    name: subStat,
                    value: randomSelectFrom(this.subStatValues.get(subStat))
                });
            }
        }

        // Create a new artifact
        return new Artifact(setName, type, {
            name: mainStat,
            value: this.MainStatValues.get(mainStat)[0]
        }, subStats);
    }
}

function randomSelectFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

export default Artifact;
export {STAT, TYPE, Artifact};

let times = 5000000;
let subCount = 0;
let timesCount = 0;
let count = 0;
for (let i = 0; i < times; i++) {
    let art = Artifact.create("", "goblet");
    if (art.subStats.length === 4) {
        timesCount++;
        let stats = art.subStatNameList;
        if (
            stats.includes("CRIT DMG%") &&
            stats.includes("CRIT Rate%")
        ) {
            subCount++;
            if (art.mainStat.name === "Anemo DMG%") {
                count++;
            }
        }
    }
}

console.log(subCount)
console.log(timesCount)
console.log(subCount / timesCount);
console.log(count)
console.log(count / times)
