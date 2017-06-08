/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('PakhshApp', ['admin.module']);
/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.module', ['admin.controllers', 'admin.directives', 'admin.routes', 'admin.services', 'angular-loading-bar'])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
    }]);


    // https://github.com/angular-ui/ui-router/wiki/Quick-Reference
/**
 * Created by amirbakhtiari on 6/1/17.
 */

(function() {
    'use strict';
    angular.module('admin.controllers', [])
    .controller('LoginController', ['$scope', 'Login', '$state', function($scope, Login, $state) {
        $scope.login = function() {
            Login.login($scope.loginForm).then(function(response) {
                $state.go('dashboard');
            }, function(error) {
                angular.forEach(error.data, function(value, key) {
                    Materialize.toast(value, 2000);                    
                })
            });
        };

    }])
    .controller('DashboardController', ['$scope', '$state', function($scope, $state) {
        $scope.logout = function() {
            $state.go('login');
        };
    }])
    .controller('FactorsController', ['$scope', '$stateParams', function($scope, $stateParams) {
        if($stateParams.confirmed == 'all' && $stateParams.today == 'today') {
            $scope.factors = {title: 'فاکتورهای تایید شده امروز'};
        } else if($stateParams.confirmed == 'unconfirmed') {
            $scope.factors = {title: 'فاکتورهای تایید نشده امروز'};
        } else if($stateParams.confirmed == 'all' && $stateParams.today == 'all') {
            $scope.factors = {title: 'تمام فاکتورها'};
        } else {
            $scope.factors = {title: 'تمام فاکتورها'};            
        }

    }])
    .controller('LogoutController', ['$scope', '$state', function($scope, $state) {
        
    }])
    .controller('CategoreisController', ['$scope', function($scope) {

    }])
    .controller('ProductsController', ['$scope', function($scope) {
        $(".button-collapse").sideNav(
            {
                menuWidth: 245, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            }
        );
        $(".button-collapse-products").sideNav(
            {
                menuWidth: 245, // Default is 300
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            }
        );
        $('.collapsible').collapsible();

    }])
    .controller('MessageController', ['$scope', function($scope) {
        $scope.replyMessage = function(id) {
            console.log($('#modal-reply').modal('open'));
        }
    }])
    .controller('PersonsController', ['$scope', function($scope) {
        angular.extend($scope, {
            addPerson: function() {

            },
            save: function() {
            }
        });
    }])
    .controller('ProfileController', ['$scope', function($scope) {

    }]);
})();
/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.directives', []);
/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.routes', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        const ADMIN_TEMPLATE = '/template/admin/';
        $urlRouterProvider.otherwise('login');
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: ADMIN_TEMPLATE + 'login.html',
            controller: 'LoginController'
        }).state('dashboard', {
            url: '/dashboard',
            templateUrl: ADMIN_TEMPLATE + 'dashboard.html',
            controller: 'DashboardController'
        }).state('factors', {
            parent: 'dashboard',
            url: '/factors/:confirmed/:today',
            templateUrl: ADMIN_TEMPLATE + 'factors.html',
            controller: 'FactorsController'
        }).state('new-factors', {
            parent: 'dashboard',
            url: '/new-factors',
            templateUrl: ADMIN_TEMPLATE + 'new-factors.html',
            resolve: {
                
            }
        }).state('logout', {
            url: '/logout',
            controller: 'LogoutController'
        }).state('categoreis', {
            parent: 'dashboard',
            url: '/categoreis',
            templateUrl: ADMIN_TEMPLATE + 'categories.html',
            controller: 'CategoreisController'
        }).state('products', {
            parent: 'dashboard',
            url: '/products',
            templateUrl: ADMIN_TEMPLATE + 'products.html',
            controller: 'ProductsController'
        }).state('message', {
            parent: 'dashboard',
            url: '/message',
            templateUrl: ADMIN_TEMPLATE + 'message.html',
            controller: 'MessageController'
        }).state('persons', {
            parent: 'dashboard',
            url: '/persons',
            templateUrl: ADMIN_TEMPLATE + 'persons.html',
            controller: 'PersonsController'
        }).state('profile', {
            parent: 'dashboard',
            url: '/profile/:user',
            templateUrl: ADMIN_TEMPLATE + 'profile.html',
            controller: 'ProfileController'
        })
    }]);
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