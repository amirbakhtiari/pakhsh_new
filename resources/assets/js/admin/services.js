/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.services', [])
    .factory('User', function($http, $q, $httpParamSerializer, $auth) {
        return {
            login: function(data) {
                return $auth.login(data);
            },
            register: function() {

            },
            captcha: function() {

            },
            profile: function(token) {
                return $http({
                    url: '/profile',
                    method: 'GET',
                    params: {token: token}
                })
            }
        }
    });