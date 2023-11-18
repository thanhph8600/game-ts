"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offFlipper = exports.onFlipper = void 0;
var onFlipper = function (element) {
    var flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(180deg)');
};
exports.onFlipper = onFlipper;
function offFlipper(element) {
    var flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(0deg)');
}
exports.offFlipper = offFlipper;
