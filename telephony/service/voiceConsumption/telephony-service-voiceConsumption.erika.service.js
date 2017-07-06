angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumptionErika", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
});
