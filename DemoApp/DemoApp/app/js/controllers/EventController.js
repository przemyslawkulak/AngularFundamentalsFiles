"use strict";

eventsApp.controller("EventController", function EventController(
  $scope,
  eventData
) {
  $scope.sortorder = "name";
  $scope.event = eventData.event;
  $scope.snippet = '<span style="color:red">hi there</span>';
  $scope.boolValue = true;
  $scope.myStyle = { color: "red" };
  $scope.myClass = "blue";
  $scope.buttonDisabled = "true";
  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };
  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  };
});
