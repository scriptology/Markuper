'use strict';

console.log("%cMarkuper", "color:white; background:black; font-size: 14px, display: inline-block, padding: 0 5px");

let appModule = require('../app');
angular.bootstrap(document, [appModule.name], { strictDi: false });



