function IDGenerator() {
    // throw Error("IDGenerator: unsupported instantiation");
    this._id = 0;
}

IDGenerator.prototype.getID = function () {
    return this._id++;
};

module.exports = IDGenerator;
