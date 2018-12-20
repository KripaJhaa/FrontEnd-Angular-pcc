import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { stateService } from './stateServices';
var AppComponent = /** @class */ (function () {
    function AppComponent(stateService) {
        this.stateService = stateService;
        this.title = 'FE-PCC-check';
        this.typeOfdocuments = ["Aadhar_card", "Voter_Card", "Passport", "ration_Card", "Electricity_Bill"];
    }
    AppComponent.prototype.getStates = function () {
        var _this = this;
        this.stateService.getSateList().subscribe(function (res) {
            _this.states = res;
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [stateService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map