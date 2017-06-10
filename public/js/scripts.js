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
        .controller('LoginController', ['$scope', 'User', '$state', function($scope, User, $state) {
            $scope.login = function() {
                User.login($scope.loginForm).then(function(response) {
                    Materialize.toast("شما با موفقیت وارد شدید.", 2000);
                    $state.go('dashboard');
                }, function(error) {
                    angular.forEach(error.data, function(value, key) {
                        Materialize.toast(value, 2000);
                    })
                });
            };
        }])
        .controller('DashboardController', ['$scope', '$state', '$auth', 'User', function($scope, $state, $auth, User) {
            if($auth.isAuthenticated()) {
                User.profile($auth.getToken()).then(function (response) {
                    $scope.user = {current: response.data.first_name + ' ' + response.data.last_name};
                })
            }
            if(!$auth.isAuthenticated())
                return;
            $scope.logout = function() {
                $auth.logout().then(function() {
                    $auth.removeToken();
                    $state.go('login');
                });
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
        .controller('CategoriesController', ['$scope', function($scope) {

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
        .controller('ProfileController', ['$scope', 'profile', '$rootScope', function($scope, profile, $rootScope) {
            $scope.profile = profile.data;
        }]);
})();
/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.directives', [])
    .directive('image-upload', function() {
        
    });
/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.routes', ['ui.router', 'satellizer'])
    .config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {
        const ADMIN_TEMPLATE = '/template/admin/';
        $authProvider.loginUrl = '/login';

        var skipIfLoggedIn = function($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        };

        var loginRequired = function($q, $location, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('login');
            }
            return deferred.promise;
        };

        $urlRouterProvider.otherwise('login');
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: ADMIN_TEMPLATE + 'login.html',
            controller: 'LoginController',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        }).state('dashboard', {
            url: '/dashboard',
            templateUrl: ADMIN_TEMPLATE + 'dashboard.html',
            controller: 'DashboardController',
            resolve: {
                loginRequired: loginRequired,
                profile: function() {
                }
            }
        }).state('factors', {
            parent: 'dashboard',
            url: '/factors/:confirmed/:today',
            templateUrl: ADMIN_TEMPLATE + 'factors.html',
            controller: 'FactorsController',
            resolve: {
                loginRequired: loginRequired
            }
        }).state('new-factors', {
            parent: 'dashboard',
            url: '/new-factors',
            templateUrl: ADMIN_TEMPLATE + 'new-factors.html',
            resolve: {
                loginRequired: loginRequired
            }
        }).state('logout', {
            url: '/logout',
            controller: 'LogoutController'
        }).state('categories', {
            parent: 'dashboard',
            url: '/categories',
            templateUrl: ADMIN_TEMPLATE + 'categories.html',
            controller: 'CategoriesController',
            resolve: {
                loginRequired: loginRequired
            }
        }).state('products', {
            parent: 'dashboard',
            url: '/products',
            templateUrl: ADMIN_TEMPLATE + 'products.html',
            controller: 'ProductsController',
            resolve: {
                loginRequired: loginRequired
            }
        }).state('message', {
            parent: 'dashboard',
            url: '/message',
            templateUrl: ADMIN_TEMPLATE + 'message.html',
            controller: 'MessageController',
            resolve: {
                loginRequired: loginRequired
            }
        }).state('persons', {
            parent: 'dashboard',
            url: '/persons',
            templateUrl: ADMIN_TEMPLATE + 'persons.html',
            controller: 'PersonsController',
            resolve: {
                loginRequired: loginRequired
            }
        }).state('profile', {
            parent: 'dashboard',
            url: '/profile',
            templateUrl: ADMIN_TEMPLATE + 'profile.html',
            controller: 'ProfileController',
            resolve: {
                loginRequired: loginRequired,
                profile: function(User, $auth) {
                    return User.profile($auth.getToken());
                }
            }
        });
    }]);
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