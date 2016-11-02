function routing($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('404');

    let allRouters = _.concat(
        require("./app.routing"),
    );

    for (let i = 0; i < allRouters.length; i++) {
        $stateProvider.state(allRouters[i].stateName, allRouters[i].params);
    }
}

export default angular
    .module('routing', [])
    .config(routing);