function teamMemberSelectCtl($scope, $http){
    $scope.candidates = [];
    $scope.candidateTypes = [];

    $scope.currentCandidateType = '';
    var currentCandidateTypeSet = false;
    $scope.$watch('currentCandidateType', function(){
        if(currentCandidateTypeSet){
            $scope.loadMoreCandidates();
        }
        currentCandidateTypeSet = true;
    });

    $scope.init = function(){
        $http.get('/teamRoom/service/teamMemberSelect').success(function(data){
            $scope.candidateTypes = data.categories;
            $scope.currentCandidateType = data.selectedCategory;
            $scope.candidates = data.candidates;
        });
    };

    $scope.loadMoreCandidates = function(){
        $http.get('/teamRoom/service/teamMemberSelect/' + $scope.currentCandidateType).success(function(data){
            $scope.candidates = data;
        });
    };

    $scope.hire = function(teamMember){
        $http.post('/teamRoom/service/teamMemberSelect/', teamMember).success(function(data){
            if(data.success === true){
                amplify.publish(global.event.teamRoom.memberAdded, data.team);
            }
            //TODO : Show error
        });
    };

    amplify.subscribe(global.event.teamRoom.showAddTeamMember, function(){
        currentCandidateTypeSet = false;
        $scope.init();
    });

};

