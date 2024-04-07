"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var pokemon_router_1 = __importDefault(require("./pokemon.router"));
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
var router = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.post('/login', function (req, res) {
        var name = req.body.name;
        // Lưu giá trị vào localStorage
        localStorage.setItem('savedName', name);
        res.render('listGame');
    });
    app.use('/pokemon', pokemon_router_1.default);
};
exports.router = router;
