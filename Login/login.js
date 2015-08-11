var login = angular.module('login', ['ngRoute']);


login.config(function($routeProvider) {
  
        $routeProvider
        // initital route for login page
        .when('/', {
            templateUrl :'Login/login.html',
            controller  : 'loginController'
        })
        
        //route for signup page
        .when('/signup',    {
            templateUrl : 'Login/signup.html',
            controller  : 'signupController'
        })
        .when('/login',     {
            templateUrl : 'Login/login.html',
            controller  : 'loginController'
        });
        
})  ;

login.controller('loginController', function($scope) {
    
    $scope.message = 'HEllo World' ;
});

login.controller('signupcontroller', function($scope) {
    
    $scope.message = ' Signup now ya fools' ;
});