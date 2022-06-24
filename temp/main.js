"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var p = new point_1.point(1, 2);
p.x = 222;
p.draw();
var d = function (point) {
    console.log(point.x, point.y);
};
d({ x: 1, y: 2 });
p.getDistance(p);
