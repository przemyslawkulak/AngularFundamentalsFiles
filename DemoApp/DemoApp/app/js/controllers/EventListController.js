"use strict";

eventsApp.controller("EventListController", function EventListController(
  $scope,
  $location,
  eventData,
  $route
) {
  $scope.events = $route.current.locals.event;
});
