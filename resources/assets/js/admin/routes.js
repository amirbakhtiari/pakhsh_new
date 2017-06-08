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