"use strict";

var eventsApp = angular
  .module("eventsApp", ["ngResource", "ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/newEvent", {
      templateUrl: "templates/NewEvent.html",
      controller: "EditEventController"
    });
    $routeProvider.when("/events", {
      templateUrl: "templates/EventList.html",
      controller: "EventListController",
      resolve: {
        event: function($route, eventData) {
          return eventData.getAllEvents().$promise;
        }
      }
    });
    $routeProvider.when("/event/:eventId", {
      foo: "bar",
      templateUrl: "templates/EventDetails.html",
      controller: "EventController",
      resolve: {
        event: function($route, eventData) {
          return eventData.getEvent($route.current.pathParams.eventId).$promise;
        }
      }
    });
    $routeProvider.when("/editProfile", {
      templateUrl: "templates/EditProfile.html",
      controller: "EditProfileController"
    });
    $routeProvider.when("/sampleDirective", {
      templateUrl: "templates/SampleDirectives.html",
      controller: "SampleDirectiveController"
    });
    $routeProvider.when("/about", {
      template: "New AngularJS site"
    });
    $routeProvider.otherwise({ redirectTo: "/events" });
    $locationProvider.html5Mode(true);
  });
