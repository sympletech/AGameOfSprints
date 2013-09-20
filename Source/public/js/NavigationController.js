function NavigationController($scope, $http, $location){
    $scope.navigationOptions = [
        {title : 'Project Status', link : 'ProjectStatus'},
        {title : 'Team Room', link : 'TeamRoom'},
    ];

    $scope.currentPage = $location.hash() ? $location.hash() : 'homePage';
    $scope.getNavigationClass = function(navLink){
        return navLink === $scope.currentPage ? 'active' : '';
    }

    $scope.navigateTo = function(navLink){
        $location.hash(navLink);
        $scope.currentPage = navLink;
        $http.get('/' + navLink).success(function(data){
            $scope.currentPageContent = data;
        });
    }

    $scope.currentPageContent = $scope.navigateTo($scope.currentPage);
}