"use strict";

eventsApp.controller("EventController", function EventController(
  $scope,
  $anchorScroll,
  $route
) {
  $scope.sortorder = "name";
  $scope.event = $route.current.locals.event;
  $scope.reload = function() {
    $route.reload();
  };
  $scope.snippet = '<span style="color:red">hi there</span>';
  $scope.boolValue = true;
  $scope.myStyle = { color: "red" };
  $scope.myClass = "blue";
  $scope.buttonDisabled = "true";
  $scope.upVoteSession = session => {
    session.upVoteCount++;
  };
  $scope.downVoteSession = session => {
    session.upVoteCount--;
  };
  $scope.scrollToSession = function() {
    $anchorScroll();
  };
});
