"use strict";

eventsApp.controller("MainMenuController", function MainMenuController(
  $scope,
  $location
) {
  $scope.allEvents = function() {
    $location.replace();
    $location.url("/events");
  };
  $scope.createEvent = function() {
    $location.replace();
    $location.url("/newEvent");
  };
  $scope.editProfile = function() {
    $location.url("/editProfile");
  };
  $scope.about = function() {
    $location.url("/about");
  };
});
