import Blocks from '../blocks'

class DocBlockController {
    constructor($stateParams) {
        let vm = this;
        vm.blocks = Blocks;

        vm.currentBlock = _.find(Blocks, {'code': $stateParams.block});
    }

}

DocBlockController.$inject = ['$stateParams'];

export default angular
    .module('doc.block.controller', [])
    .controller('DocBlockController', DocBlockController);
