/**
 * Created by amirbakhtiari on 6/1/17.
 */
angular.module('admin.module', ['admin.controllers', 'admin.directives', 'admin.routes', 'admin.services', 'angular-loading-bar'])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    }]);


// https://github.com/angular-ui/ui-router/wiki/Quick-Reference