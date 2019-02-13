"use strict";

const lightswitch = {
    bindings: {
        turnOn: "&"
    },
    template: `
    <button ng-click="$ctrl.turnOn();">SWITCH</button>
    `
}

angular
    .module("App")
    .component("lightswitch", lightswitch)