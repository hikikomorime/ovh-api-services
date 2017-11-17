angular.module("ovh-api-services").service("OvhApiMetricsOrder", function ($injector) {
    "use strict";
    return {
        Upgrade: function () {
            return $injector.get("OvhApiMetricsOrderUpgrade");
        }
    };
});
