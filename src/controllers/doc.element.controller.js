import Blocks from '../blocks'


class DocElementController {
    constructor($stateParams) {
        let vm = this;
        vm.blocks = Blocks;

        console.log( $stateParams.element)
        vm.currentElement = _.find(Blocks, {'code': $stateParams.element});
        console.log(vm.currentElement)
    }

}

DocElementController.$inject = ['$stateParams'];

export default angular
    .module('doc.element.controller', [])
    .controller('DocElementController', DocElementController);
