import TileMap from "./TileMap.js";

let map = new TileMap(15, 15);
map.setStartEnd([0, 0], [14, 14])
map.DFSCreate();
map.show();
