angular.module("ovh-api-services").service("OvhApiDbaasLogs", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAapi");
        },
        Accounting: function () {
            return $injector.get("OvhApiDbaasLogsAccounting");
        },
        Details: function () {
            return $injector.get("OvhApiDbaasLogsDetails");
        },
        Stream: function () {
            return $injector.get("OvhApiDbaasLogsStream");
        },
        Offer: function () {
            return $injector.get("OvhApiDbaasLogsOffer");
        },
        Operation: function () {
            return $injector.get("OvhApiDbaasLogsOperation");
        },
        Alert: function () {
            return $injector.get("OvhApiDbaasLogsAlert");
        },
        Index: function () {
            return $injector.get("OvhApiDbaasLogsIndex");
        },
        Alias: function () {
            return $injector.get("OvhApiDbaasLogsAlias");
        },
        Archive: function () {
            return $injector.get("OvhApiDbaasLogsArchive");
        },
        Role: function () {
            return $injector.get("OvhApiDbaasLogsRole");
        },
        Input: function () {
            return $injector.get("OvhApiDbaasLogsInput");
        },
        Tokens: function () {
            return $injector.get("OvhApiDbaasLogsTokens");
        }
    };
});
