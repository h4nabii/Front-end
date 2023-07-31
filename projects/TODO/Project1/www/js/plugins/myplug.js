//=============================================================================
// myplug.js
//=============================================================================

let fs = require('fs');

(function () {
    let runCopy = SceneManager.run;
    SceneManager.run = function (sceneClass) {
        alert(1);
        fs.mkdir('test', function (err) {
            console.log(err);
        });
        runCopy.call(this, sceneClass);
    }
})();
