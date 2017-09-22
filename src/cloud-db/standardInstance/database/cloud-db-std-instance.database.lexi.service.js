angular.module("ovh-api-services").service("OvhApiCloudDbStdInstanceDatabaseLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudDbStdInstanceDatabaseLexi");
    var queryCache = $cacheFactory("OvhApiCloudDbStdInstanceDatabaseLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/cloudDB/:projectId/standard/instance/:instanceId/database/:databaseId", {
        projectId: "@projectId",
        instanceId: "@instanceId",
        databaseId: "@databaseId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        createDump: {
            url: "/cloudDB/:projectId/standard/instance/:instanceId/database/:databaseId/dump",
            method: "POST",
            cache: cache,
            interceptor: interceptor
        },
        getExtensions: {
            url: "/cloudDB/:projectId/standard/instance/:instanceId/database/:databaseId/extension",
            method: "GET",
            isArray: true,
            cache: cache
        },
        getExtension: {
            url: "/cloudDB/:projectId/standard/instance/:instanceId/database/:databaseId/extension/extensionId",
            method: "GET",
            cache: cache
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
