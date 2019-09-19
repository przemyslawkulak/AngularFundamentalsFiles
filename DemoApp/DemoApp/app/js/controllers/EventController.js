"use strict";

eventsApp.controller("EventController", function EventController(
  $scope,
  eventData,
  $anchorScroll,
  $routeParams
) {
  $scope.sortorder = "name";
  $scope.event = eventData
    .getEvent($routeParams.eventId)
    .$promise.then(function(event) {
      $scope.event = event;
    })
    .catch(function(response) {
      console.log(response);
    });

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
