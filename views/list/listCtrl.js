import 'angular-ui-router';
import './../../services/services';

let listModule = angular.module('app.list', [
        'services',
        'ui.router'
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'views/list/list.html',
                resolve: {
                    list: (AromaService) => {
                        // debugger;
                        return AromaService.query().$promise;
                    }
                },
                controller: function($scope, $state, AromaService, list) {
                    console.log(list);
                }
            })
    });

export default listModule;