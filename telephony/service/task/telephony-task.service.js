angular.module("ovh-api-services").service("TelephonyServiceTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceTaskLexi");
        }
    };
});
