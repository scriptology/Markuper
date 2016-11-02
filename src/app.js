require('angular');
require('!style!css!sass!./styles/importer.sass');

let angular = require('angular');


if(NODE_ENV == 'dev') {
    window.$ = require("jquery");
    window.jQuery = require("jquery");
}

export default angular
    .module('App', [
        require('angular-ui-router'),
        (() => {
            require('../node_modules/angular-highlightjs/build/angular-highlightjs.min.js');
            return 'hljs';
        })(),
        require('./directives/ng-compile/ng-compile.directive').name,
        require('./controllers/doc.controller.js').name,
        require('./controllers/doc.block.controller.js').name,
        require('./controllers/doc.element.controller.js').name,

        // --- require routings ---
        require('./routing.js').name
    ])