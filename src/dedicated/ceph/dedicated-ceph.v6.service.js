angular.module("ovh-api-services").service("OvhApiDedicatedCephV6", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiDedicatedCephv6Schema");
    var queryCache = $cacheFactory("OvhApiDedicatedCephV6Query");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/dedicated/ceph.json"
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        health: {
            url: "/dedicated/ceph/:serviceName/health",
            method: "GET"
        }
    });

    resource.resetAllCache = function () {
        resource.resetSchemaCache();
        resource.resetQueryCache();
        resource.resetOtherCache();
    };

    resource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
