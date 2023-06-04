export default class MapPool {
    constructor(map) {
        if (map instanceof Map) this.map = map;
        else this.map = new Map(map);

        this.size = [...this.map.values()].reduce((p, c) => p + c, 0)
    }

    remove(key) {
        this.size -= this.map.get(key) ?? 0;
        this.map.delete(key);
    }

    select() {
        let random = Math.floor(Math.random() * this.size);
        let sum = 0;
        for (let [k, v] of this.map) {
            sum += v;
            if (sum > random) {
                this.remove(k)
                return k;
            }
        }
    }
}
