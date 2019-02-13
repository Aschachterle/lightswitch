"use strict";
const light = {
    template: `
    <section ng-class="{lighton: $ctrl.isOn}">
        LIGHT
        <lightswitch turn-on="$ctrl.onFlip();"></lightswitch>
    </section>
    `,
    controller: [function() {
        const vm = this;
        vm.isOn = false
        vm.onFlip = function() {
            console.log('click')
            vm.isOn = !vm.isOn;
        };


    }]    






}


angular
    .module("App")
    .component("light", light)