function teamMemberSelectCtl($scope, $http){
    $scope.candidates = [];
    $scope.candidateTypes = [];

    $scope.currentCandidateType = '';

    $scope.init = function(){
        $http.get('/teamRoom/service/teamMemberSelect').success(function(data){
            $scope.candidateTypes = data.categories;
            $scope.currentCandidateType = data.selectedCategory;
            $scope.candidates = data.candidates;
        });
    };

    amplify.subscribe(global.event.teamRoom.showAddTeamMember, function(){
        $scope.init();
    });

};

