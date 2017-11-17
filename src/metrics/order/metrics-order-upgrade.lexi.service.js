"use strict";

angular.module("ovh-api-services").service("OvhApiMetricsOrderUpgradeLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiMetricsOrderUpgradeLexi");
    var queryCache = $cacheFactory("OvhApiMetricsOrderUpgradeLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var metricsOrderUpgrade = $resource("/order/upgrade/metrics/:serviceName/:planCode", {
        serviceName: "@serviceName",
        planCode: "@planCode"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor }
    });

    metricsOrderUpgrade.resetCache = function () {
        cache.removeAll();
    };

    metricsOrderUpgrade.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return metricsOrderUpgrade;
});
