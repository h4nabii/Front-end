import Character from "./character.js";
import Artifact from "./artifact.js";
import Weapon from "./weapon.js";
import weapon from "./weapon.js";

class Panel {
    constructor(character) {
        this.character = character instanceof Character ? character : undefined;
        this.artifacts = {
            set flower(artifact) {
                if (artifact instanceof Artifact) this._flower_of_life = artifact;
            },

            get flower() {
                return this._flower_of_life;
            },

            set plume(artifact) {
                this._plume_of_death = artifact instanceof Artifact ? artifact : undefined;
            },

            get plume() {
                return this._plume_of_death;
            },

            set sands(artifact) {
                this._sands_of_eon = artifact instanceof Artifact ? artifact : undefined;
            },

            get sands() {
                return this._sands_of_eon;
            },

            set goblet(artifact) {
                this._goblet_of_eonothem = artifact instanceof Artifact ? artifact : undefined;
            },

            get goblet() {
                return this._goblet_of_eonothem;
            },

            set circlet(artifact) {
                this._circlet_of_logos = artifact instanceof Artifact ? artifact : undefined;
            },

            get circlet() {
                return this._circlet_of_logos;
            },
        };
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(weapon) {
        this._weapon = weapon instanceof Weapon ? weapon : undefined;
    }
}

let ke = new Character();
let panel = new Panel(ke);

panel.weapon = [123];
console.log(panel.weapon)
panel.weapon = new Weapon();
console.log(panel.weapon)
