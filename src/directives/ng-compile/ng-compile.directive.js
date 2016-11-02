/**
 * Created by asolovyev on 01/11/16.
 */

import angular from 'angular';

function ngCompile($compile) {
    return {
        scope: {
            ngCompile: "="
        },
        link: (scope, element, attrs) => {

            element.append($compile(scope.ngCompile)(scope))

        }
    }
}

ngCompile.$inject = ['$compile'];

export default angular
    .module('ng-compile.directive', [])
    .directive('ngCompile', ngCompile);
