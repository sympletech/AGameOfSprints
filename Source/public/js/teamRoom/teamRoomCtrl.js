function teamRoomCtrl($scope, $http){
    $scope.teamMembers = [];
    $scope.skillsLab = [];

    $scope.getRoomData = function(){
        $http.get('teamRoom/service/').success(function(data){
            $scope.teamMembers = data.teamMembers;
            while($scope.teamMembers.length < 4){
                $scope.teamMembers.push({});
            }
            $scope.skillsLab = data.skillsLab;
        });
    };
    $scope.getRoomData();

    $scope.addTeamMember = function(){
        amplify.publish(global.event.teamRoom.showAddTeamMember);
    };

    amplify.subscribe(global.event.teamRoom.memberAdded, function(data){
        $scope.teamMembers = data.teamMembers;
    });
};