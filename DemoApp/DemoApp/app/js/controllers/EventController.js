"use strict";

eventsApp.controller("EventController", function EventController(
  $scope,
  eventData,
  $anchorScroll,
  $routeParams,
  $route
) {
  $scope.sortorder = "name";
  $scope.event = $route.current.locals.event;
  console.log($route.current.foo);
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
