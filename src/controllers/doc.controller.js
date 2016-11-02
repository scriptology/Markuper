import Blocks from '../blocks'

class DocController {
    constructor($state, $rootScope, $location) {
        let vm = this;

        vm.blocks = _.filter(Blocks, function(o) { return o.type == 'block'; });

        vm.locationUrl = $location.url();

        $rootScope.$on('$stateChangeSuccess', () => {
            vm.showSidebar = false;
            vm.locationUrl = $location.url();
        });

    }
}

DocController.$inject = ['$state', '$rootScope', '$location'];

export default angular
    .module('doc.controller', [])
    .controller('DocController', DocController);
