angular.module("ovh-api-services").service("OvhApiDedicatedCloudUser", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudUserV6");
        }
    };

});
