angular.module("ovh-api-services").service("OvhApiOrderUpgrade", function ($injector) {

    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderUpgradeLexi");
        }
    };
});
