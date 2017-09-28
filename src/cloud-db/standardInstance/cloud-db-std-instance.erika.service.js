angular.module("ovh-api-services").service("OvhApiCloudDbStdInstanceErika", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudDbStdInstanceErika");
    var queryCache = $cacheFactory("OvhApiCloudDbStdInstanceErikaQuery");

    var resource = new Apiv7Endpoint("/cloudDB/:projectId/standard/instance/:instanceId", {
        projectId: "@projectId",
        instanceId: "@instanceId"
    }, {
        query: {
            url: "/cloudDB/:projectId/standard/instance",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        },
        test1: {
            url: "/dbaas/queue",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        },
        test2: {
            url: "/freefax",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        },
        test3: {
            url: "/cloudDB",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
