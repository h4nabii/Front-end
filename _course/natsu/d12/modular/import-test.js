import default_obj from "./export-default.js";
// import {default as defaultTest} from "export-default.js"

import {f, a} from "./export-together.js";
import * as together_obj from "./export-together.js";

import {f as f_s, a as a_s} from "./export-seperate.js";
import * as separate_obj from "./export-seperate.js";

console.log(default_obj);
// console.log(defaultTest);
console.log(f, a);
console.log(f_s, a_s);
console.log(together_obj);
console.log(separate_obj);