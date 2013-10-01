function LoginCtrl($scope, $http, $rootScope){

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

        $http.post('login', $scope.loginInfo).success(function(data){
            if(!data.isValid){
                $scope.loginResponse.failedLogin = true;
                $scope.loginResponse.failedLoginMessage = data.message;
            }else{
                amplify.publish(global.event.userSessionStateChanged);
                amplify.publish(global.event.userLoggedIn);
            }
        });
    };

    //Create Account Section
    //**********************************************
    $scope.accountDetails = {
        teamName : '',
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

            $scope.loginInfo.username = $scope.accountDetails.username;
            $scope.loginInfo.password = $scope.accountDetails.password;
            $scope.loginInfo.rememberMe = true;
            $scope.attemptLogin();
        });
    };
}