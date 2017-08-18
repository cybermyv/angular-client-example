//git remote add origin https://github.com/cybermyv/angular-client-example.git

import angular from 'angular';
import 'angular-resource';




import './services/services';
import './views/list/listCtrl';

let app = angular.module('app', ['app.list']);

app.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/list');
})

export default app;