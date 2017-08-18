import 'angular-resource';
import 'angular-ui-router';
import './../../services/services';

let listModule = angular.module('app.list', [
    'services',
    'ngResource',
    'ui.router'
]);

listModule.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: 'views/list/list.html',
            resolve: {
                list: function(AromaService) {
                    console.log('resolve');
                    // debugger;
                    return AromaService.get().$promise;

                }
            },
            controller: function($scope, $state, AromaService, list) {

            }
        })

});

export default listModule;