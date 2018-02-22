angular.module("ovh-api-services").service("OvhApiDbaasLogsInputLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsInputLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsInputLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var inputResource = $resource("/dbaas/logs/:serviceName/input/:inputId", {
        serviceName: "@serviceName",
        inputId: "@inputId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        start: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/start" },
        restart: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/restart" },
        end: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/end" },
        logurl: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/logs/url" }
    });

    inputResource.resetAllCache = function () {
        inputResource.resetCache();
        inputResource.resetQueryCache();
    };

    inputResource.resetCache = function () {
        cache.removeAll();
    };

    inputResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return inputResource;
});