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