angular.module("ovh-api-services").service("OvhApiCloudDbLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudDbLexi");
    var schemaCache = $cacheFactory("OvhApiDedicatedCephLexiSchema");
    var queryCache = $cacheFactory("OvhApiCloudDbLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/cloudDB/:projectId", {
        projectId: "@projectId"
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/cloudDB.json"
        },
        query: { method: "GET", isArray: true },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        getServiceInfos: {
            url: "/cloudDB/:projectId/serviceInfos",
            method: "GET",
            cache: cache
        },
        getImages: {
            url: "/cloudDB/:projectId/standard/image",
            method: "GET",
            cache: cache,
            isArray: true
        },
        getImage: {
            url: "/cloudDB/:projectId/standard/image/:imageId",
            method: "GET",
            cache: cache
        },
        getRegions: {
            url: "/cloudDB/:projectId/standard/region",
            method: "GET",
            cache: cache,
            isArray: true
        },
        getRegion: {
            url: "/cloudDB/:projectId/standard/region/:regionId",
            method: "GET",
            cache: cache
        },
        getFlavors: {
            url: "/cloudDB/:projectId/standard/flavor",
            method: "GET",
            cache: cache,
            isArray: true
        },
        getFlavor: {
            url: "/cloudDB/:projectId/standard/flavor/:flavorId",
            method: "GET",
            cache: cache
        },
        getTasks: {
            url: "/cloudDB/:projectId/task",
            method: "GET",
            isArray: true
        },
        getTask: {
            url: "/cloudDB/:projectId/task/:taskId",
            method: "GET"
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    resource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    return resource;
});
