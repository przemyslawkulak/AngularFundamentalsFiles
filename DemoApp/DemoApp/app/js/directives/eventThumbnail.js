"use strict";

eventsApp.directive("eventThumbnail", function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      event: "=event"
    },
    templateUrl: "templates/directives/eventThumbnail.html"
  };
});
