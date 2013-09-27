function LoginController($scope, $http){

    //Login Info Section
    //**********************************************
    $scope.loginInfo = {
        username : '',
        password : '',
        rememberMe : true
    };

    $scope.loginResponse = {
        failedLogin: false,
        failedLoginMessage: ''
    };

    $scope.attemptLogin = function(){
        $http.post('login/Authenticate', $scope.loginInfo).success(function(data){
            if(!data.isValid){
                $scope.loginResponse.failedLogin = true;
                $scope.loginResponse.failedLoginMessage = data.message;
            }
        });
    };

    //Create Account Section
    //**********************************************
    $scope.accountDetails = {
        username : '',
        password : '',
        firstName : '',
        lastName : '',
        emailAddress : ''
    };

    $scope.createAccountResponse = {
        show : false,
        success : false,
        message : ''
    };

    $scope.SubmitNewAccountInfo = function(accountDetails){
        $http.post('login/CreateAccount', accountDetails).success(function(data){
            $scope.createAccountResponse.show = true;
            $scope.createAccountResponse.success = data.success;
            $scope.createAccountResponse.message = data.message;
            $scope.createAccountResponse.message = data.message;
        });
    };
}

//Register Controller
angular.element('#loginWrapper').ready(function() {
    angular.module('AGameOfSprints', []);
    angular.bootstrap('#loginWrapper', ['AGameOfSprints']);
});