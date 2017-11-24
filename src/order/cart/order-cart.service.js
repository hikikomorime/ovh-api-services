angular.module("ovh-api-services").service("OvhApiOrderCart", function ($injector) {
<<<<<<< HEAD

    "use strict";
    return {
        Item: function () {
            return $injector.get("OvhApiOrderCartItem");
        },
        Product: function () {
            return $injector.get("OvhApiOrderCartProduct");
        },
        ServiceOption: function () {
            return $injector.get("OvhApiOrderCartServiceOption");
        },
=======
    "use strict";
    return {
        Product: function () {
            return $injector.get("OvhApiOrderCartProduct");
        },
>>>>>>> commit changes
        Lexi: function () {
            return $injector.get("OvhApiOrderCartLexi");
        }
    };
});
