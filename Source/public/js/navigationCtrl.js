function NavigationCtrl($scope, $http, $location){

    $scope.navigationOptions = [];
    $scope.currentUser = {};

    //Get current page from querystring or default to homepage
    $scope.currentPage = $location.hash() ? $location.hash() : 'homePage';

    //Set Current Page as active in nav bar
    $scope.getNavigationClass = function(navLink){
        return navLink === $scope.currentPage ? 'active' : '';
    }

    //Power the navigation bar clicks
    $scope.navigateTo = function(navLink){
        $location.hash(navLink);
        $scope.currentPage = navLink;
        $http.get('/' + navLink).success(function (data) {
            $scope.currentPageContent = data;
        });
    }

    //Load Home Page on initial Pass
    $scope.currentPageContent = $scope.navigateTo($scope.currentPage);

    $scope.loadCurrentSession = function(){
        $http.get('/Session').success(function (data) {
            $scope.navigationOptions = data.navigation;
            $scope.currentUser = data.currentUser;
        });
    };
    $scope.loadCurrentSession();


    $scope.logOut = function(){
        $http.delete('/Session').success(function (){
            amplify.publish(global.event.userSessionStateChanged);
            $scope.navigateTo("Login");
        });
    };

    //External Event Subscriptions
    //****************************************************************
    amplify.subscribe(global.event.userSessionStateChanged, function(){
        $scope.loadCurrentSession();
    });

    amplify.subscribe(global.event.userLoggedIn, function(){
        $scope.navigateTo("TeamRoom");
    });
}
