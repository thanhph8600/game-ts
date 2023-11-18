"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var pokemonSelected = [];
var index = Number($('input[name="index"]').val());
var sum = index * 2;
$(document).on('click', '.choosed', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            onFlipper($(this));
            $(this).removeClass('choosed');
            if (pokemonSelected.length < 2) {
                pokemonSelected.push($(this));
            }
            if (pokemonSelected.length == 2) {
                if (pokemonSelected[0].attr('data') == pokemonSelected[1].attr('data')) {
                    chooseTrue(pokemonSelected);
                    sum -= 2;
                    if (sum == 0) {
                        window.location.href = "/pokemon?index=".concat(index + 1);
                    }
                }
                else {
                    chooseFalse(pokemonSelected);
                }
                pokemonSelected = [];
            }
            console.log(pokemonSelected);
            return [2 /*return*/];
        });
    });
});
function onFlipper(element) {
    var flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(180deg)');
}
;
function offFlipper(element) {
    var flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(0deg)');
}
function chooseTrue(list) {
    list[0].children('.flipper').css('border', '1px solid green');
    list[1].children('.flipper').css('border', '1px solid green');
    setTimeout(function () {
        list[0].remove();
        list[1].remove();
    }, 1000);
}
function chooseFalse(list) {
    list[0].addClass('choosed');
    list[1].addClass('choosed');
    list[0].children('.flipper').addClass('border border-red-400');
    list[1].children('.flipper').addClass('border border-red-400');
    setTimeout(function () {
        offFlipper(list[0]);
        offFlipper(list[1]);
        list[0].children('.flipper').removeClass('border border-red-400');
        list[1].children('.flipper').removeClass('border border-red-400');
    }, 1000);
}
var outTime = index * 10;
var time = outTime;
// Lấy đối tượng canvas và context
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var intervalId = setInterval(renderTime, 1000);
// Dừng vẽ sau 60 giây
setTimeout(function () {
    clearInterval(intervalId);
}, outTime * 1000); // Chuyển đổi giây thành mili giây
function renderTime() {
    time -= 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Vẽ hình tròn
    var centerX = canvas.width / 2 - 2;
    var centerY = canvas.height / 2 - 2;
    var radius = Math.min(canvas.width, canvas.height) / 2 - 4;
    //   context.beginPath();
    //   context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    //   context.stroke();
    // Vẽ 1/3 hình tròn
    var startAngle = 0;
    var endAngle = (time / (outTime)) * 2 * Math.PI;
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.lineWidth = 5; // Độ rộng đường vẽ
    context.strokeStyle = 'red'; // Màu đường vẽ
    context.stroke();
    // Thêm số vào giữa
    var minute = Math.floor(time / 60);
    var second = time % 60;
    var number = "".concat(minute, " : ").concat(second);
    context.font = "20px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(number, centerX, centerY);
    // Log giá trị của time
    console.log(time);
    // Kiểm tra nếu hết thời gian thì dừng interval
    if (time <= 0) {
        alert('Bạn đã hết giờ');
        $('.choosed').removeClass('choosed');
        clearInterval(intervalId);
    }
}
