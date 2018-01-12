angular.module("ovh-api-services").service("OvhApiOrderUpgradeLexi", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var cache = $cacheFactory("OvhApiOrderUpgradeLexi");

    var interceptor = {
        response: function (response) {
            orderUpgrade.resetCache();
            return response.data;
        }
    };

    var orderUpgrade = $resource("/order/upgrade/:product/:serviceName/:planCode", {
        product: "@product",
        serviceName: "@serviceName",
        planCode: "@planCode"
    }, {
        query: {
            method: "GET",
            cache: cache,
            isArray: true,
            url: "/order/upgrade/:product"
        },
        offerQuery: {
            method: "GET",
            cache: cache,
            isArray: false,
            url: "/order/upgrade/:product/:serviceName"
        },
        offer: {
            method: "GET",
            cache: cache,
            isArray: false
        },
        post: {
            method: "POST",
            interceptor: interceptor
        }
    });

    orderUpgrade.resetCache = function () {
        cache.removeAll();
    };

    return orderUpgrade;
});
