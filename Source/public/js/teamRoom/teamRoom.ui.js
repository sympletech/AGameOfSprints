amplify.subscribe(global.event.teamRoom.memberAdded, function(){
    $("#teamMemberSelectModal").modal('hide');
});