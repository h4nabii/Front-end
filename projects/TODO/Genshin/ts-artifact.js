var Type;
(function (Type) {
    Type[Type["Flower"] = 0] = "Flower";
    Type[Type["Plume"] = 1] = "Plume";
    Type[Type["Sands"] = 2] = "Sands";
    Type[Type["Goblet"] = 3] = "Goblet";
    Type[Type["Circlet"] = 4] = "Circlet";
})(Type || (Type = {}));
var StatNames;
(function (StatNames) {
    StatNames[StatNames["Hp"] = 0] = "Hp";
    StatNames[StatNames["HpPer"] = 1] = "HpPer";
    StatNames[StatNames["Atk"] = 2] = "Atk";
    StatNames[StatNames["AtkPer"] = 3] = "AtkPer";
    StatNames[StatNames["Def"] = 4] = "Def";
    StatNames[StatNames["DefPer"] = 5] = "DefPer";
    StatNames[StatNames["PyroDmgPer"] = 6] = "PyroDmgPer";
    StatNames[StatNames["HydroDmgPer"] = 7] = "HydroDmgPer";
    StatNames[StatNames["CryoDmgPer"] = 8] = "CryoDmgPer";
    StatNames[StatNames["ElectroDmgPer"] = 9] = "ElectroDmgPer";
    StatNames[StatNames["AnemoDmgPer"] = 10] = "AnemoDmgPer";
    StatNames[StatNames["GeoDmgPer"] = 11] = "GeoDmgPer";
    StatNames[StatNames["DendroDmgPer"] = 12] = "DendroDmgPer";
    StatNames[StatNames["PhysicalDmgPer"] = 13] = "PhysicalDmgPer";
    StatNames[StatNames["ElementalMastery"] = 14] = "ElementalMastery";
    StatNames[StatNames["EnergyRechargePer"] = 15] = "EnergyRechargePer";
    StatNames[StatNames["CritRatePer"] = 16] = "CritRatePer";
    StatNames[StatNames["CritDmgPer"] = 17] = "CritDmgPer";
    StatNames[StatNames["HealingBonusPer"] = 18] = "HealingBonusPer";
})(StatNames || (StatNames = {}));
var TsArtifact = /** @class */ (function () {
    function TsArtifact() {
    }
    TsArtifact.create = function () {
    };
    return TsArtifact;
}());
console.log(Type);
