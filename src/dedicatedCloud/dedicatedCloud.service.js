angular.module("ovh-api-services").service("OvhApiDedicatedCloud", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudV6");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCloudUser");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudFiler");
        },
        Datacenter: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenter");
        }
    };

});
