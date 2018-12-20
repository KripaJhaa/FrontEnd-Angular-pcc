import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var stateService = /** @class */ (function () {
    function stateService(http) {
        this.http = http;
    }
    stateService.prototype.getSateList = function () {
        return this.http.post('http://localhost:8802/state', httpOptions);
    };
    stateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], stateService);
    return stateService;
}());
export { stateService };
//# sourceMappingURL=stateServices.js.map