import 'angular-resource';

let services = angular.module('services', ['ngResource'])
    .service('AromaService',
        function($resource) {
            // return $resource('http://mywebserver\:1337/books/:bookId', { bookId: '@bookId' });
            return $resource('http://localhost\:8080/list/:id', { id: '@id' }, {

                update: { method: 'PUT' },
                get: { method: 'GET', isArray: false }

            });
        });

export default services;