angular.module("ovh-api-services").service("OvhApiCdnDedicatedV6", function ($resource, $q, OvhApiCdnDedicated) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnDedicated.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnDedicated.cache
        }
    });
});
