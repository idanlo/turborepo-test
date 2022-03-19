"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const createServer = () => {
    const app = (0, express_1.default)();
    app.get('/isAlive', (req, res) => {
        return res.send('Alive!');
    });
    return app;
};
exports.createServer = createServer;
