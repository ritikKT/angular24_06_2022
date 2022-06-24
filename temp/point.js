"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point = void 0;
var point = /** @class */ (function () {
    function point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    point.prototype.draw = function () {
        console.log(this._x, this._y);
    };
    point.prototype.getDistance = function (a) {
        console.log(a._x, a._y);
    };
    Object.defineProperty(point.prototype, "x", {
        set: function (val) {
            if (val < 0) {
                throw new Error("er");
            }
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    return point;
}());
exports.point = point;
