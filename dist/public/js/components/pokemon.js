"use strict";
class Componets {
    onFlipper(element) {
        let flipper = element.find('.flipper');
        flipper.css('transform', 'rotateY(180deg)');
    }
    offFlipper(element) {
        let flipper = element.find('.flipper');
        flipper.css('transform', 'rotateY(0deg)');
    }
}
$(document).on('click', '.flip-container', function () {
    onFlipper($(this));
    setTimeout(() => {
        offFlipper($(this));
    }, 1000);
});
function onFlipper(element) {
    let flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(180deg)');
}
function offFlipper(element) {
    let flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(0deg)');
}
