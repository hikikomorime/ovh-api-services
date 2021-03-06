angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuotaV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectQuotaV6Query");
    var cache = $cacheFactory("OvhApiDBaasTsProjectQuotaV6");

    var quotaResource = $resource("/dbaas/timeseries/:serviceName/quota", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        enlarge: { method: "POST", url: "/dbaas/timeseries/:serviceName/quota/enlarge" }
    });

    quotaResource.resetAllCache = function () {
        quotaResource.resetCache();
        quotaResource.resetQueryCache();
    };

    quotaResource.resetCache = function () {
        cache.removeAll();
    };

    quotaResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return quotaResource;
});
