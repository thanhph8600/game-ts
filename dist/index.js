"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_router_1 = require("./router/index.router");
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'components')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
(0, index_router_1.router)(app);
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
