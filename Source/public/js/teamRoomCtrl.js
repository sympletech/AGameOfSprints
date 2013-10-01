function teamRoomCtrl($scope, $http){
    $scope.teamMembers = [];
    $scope.teamSkills = [];

    $scope.getTeamMembers = function(){
        $http.get('')
    };
};