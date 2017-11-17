angular.module("ovh-api-services").service("OvhApiMetricsOrderUpgrade", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiMetricsOrderUpgradeLexi");
        }
    };
});
