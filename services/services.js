let services = angular.module('services', ['ngResource'])
    .service('AromaService',
        function($resource) {
            return $resource('http://localhost:8080/:id', { id: '@id' }, {
                update: { method: 'PUT' }
            });
        });

export default services;