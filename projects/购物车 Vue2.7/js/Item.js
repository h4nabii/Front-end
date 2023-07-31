function Item(name, price = 0) {
    this.id = Item.getID();
    this.name = name;
    this.price = price;
}

Item._nextID = 1;

Item.getID = function () {
    return Item._nextID++;
};

Item.prototype.toString = function () {
    return JSON.stringify(this);
};
