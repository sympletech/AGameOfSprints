function NavigationController($scope, $http, $location){
    $scope.navigationOptions = [
        {title : 'Project Status', link : 'ProjectStatus'},
        {title : 'Team Room', link : 'TeamRoom'}
    ];

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

    $scope.LoadLoginPage = function(){
        $scope.navigateTo('login');
    };
}
