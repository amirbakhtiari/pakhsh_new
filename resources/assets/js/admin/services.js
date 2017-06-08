/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.services', [])
    .factory('Login', function($http, $q, $httpParamSerializer) {
        return {
            login: function(data) {
                return $http(
                    {
                        url: '/login',
                        method: 'POST',
                        data: data,
                        headers: {'Content-type': 'application/json'}
                    });
            },
            register: function() {

            },
            captcha: function() {

            }
        }
    });