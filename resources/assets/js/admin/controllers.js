/**
 * Created by amirbakhtiari on 6/1/17.
 */

(function() {
    'use strict';
    angular.module('admin.controllers', [])
    .controller('LoginController', ['$scope', 'Login', '$state', function($scope, Login, $state) {
        $scope.login = function() {
            Login.login($scope.loginForm).then(function(response) {
                console.log(response)
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