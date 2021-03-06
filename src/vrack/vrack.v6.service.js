"use strict";

angular.module("ovh-api-services").service("OvhApiVrackV6", function ($resource, $cacheFactory, OvhApiVrackAapi) {

    var cache = $cacheFactory("OvhApiVrackV6");
    var queryCache = $cacheFactory("OvhApiVrackV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrackAapi.resetCache();
            return response;
        }
    };

    var vracks = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/vrack.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        allowedServices: {
            method: "GET",
            url: "/vrack/:serviceName/allowedServices",
            cache: cache
        },
        tasks: {
            method: "GET",
            isArray: true,
            url: "/vrack/:serviceName/task"
        },
        task: {
            method: "GET",
            url: "/vrack/:serviceName/task/:taskId"
        }
    });

    vracks.resetCache = function () {
        cache.removeAll();
    };

    vracks.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vracks;
});
