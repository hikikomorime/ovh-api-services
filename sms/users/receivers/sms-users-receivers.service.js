angular.module("ovh-api-services").service("SmsUsersReceivers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersReceiversLexi");
        }
    };
});
