angular.module("ovh-api-services").service("OvhApiDomain", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainV6");
        },
        v7: function () {
            return $injector.get("OvhApiDomainV7");
        }
    };
});
