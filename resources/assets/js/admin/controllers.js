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