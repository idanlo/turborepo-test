"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_utils_1 = require("@idanlo/server-utils");
const app = (0, server_utils_1.createServer)();
app.get('/', (req, res) => {
    res.send('Hello World4');
});
app.listen(3002, () => {
    console.log('Listening...');
});
