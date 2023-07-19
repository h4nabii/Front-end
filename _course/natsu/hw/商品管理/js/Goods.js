class Goods {

    static nextID = 0;

    static getID() {
        return this.nextID++;
    }

    constructor(name, price = 0, type = "", stock = 0, info = "") {
        this.id = Goods.getID();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.info = info;
        this.type = type;
        this.sale = false;
    }
}
