function LoginController($scope, $http){
    $scope.loginInfo = {
        username : 'hello',
        password : '123456',
        rememberMe : true
    };



    $scope.attemptLogin = function(){
        $http.post('login/Authenticate', $scope.loginInfo).success(function(data){
            if(!data.isValid){
                $scope.failedLogin = true;
                $scope.failedLoginMessage = data.message;
            }
        });
    };

    $scope.failedLogin = false;
    $scope.failedLoginMessage = '';
}

//Register Controller
angular.element('#loginWrapper').ready(function() {
    angular.module('AGameOfSprints', []);
    angular.bootstrap('#loginWrapper', ['AGameOfSprints']);
});