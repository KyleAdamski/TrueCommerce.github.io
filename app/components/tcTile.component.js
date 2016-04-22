System.register(['angular2/core'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TcTile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TcTile = (function () {
                function TcTile() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "description", void 0);
                __decorate([
                    core_1.Input('image-url'), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "imageUrl", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], TcTile.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input('button-action-label'), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "buttonActionLabel", void 0);
                __decorate([
                    core_1.Input('action-url'), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "actionUrl", void 0);
                __decorate([
                    core_1.Input('button-info-label'), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "buttonInfoLabel", void 0);
                __decorate([
                    core_1.Input('button-info-url'), 
                    __metadata('design:type', String)
                ], TcTile.prototype, "buttonInfoUrl", void 0);
                TcTile = __decorate([
                    core_1.Component({
                        selector: 'tc-tile',
                        templateUrl: 'app/components/tcTile.template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TcTile);
                return TcTile;
            }());
            exports_1("TcTile", TcTile);
        }
    }
});
//# sourceMappingURL=tcTile.component.js.map
