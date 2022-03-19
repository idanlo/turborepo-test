import express from 'express';

const createServer = () => {
    const app = express();
    app.get('/isAlive', (req, res) => {
        return res.send('Alive!');
    });

    return app;
};

export { createServer };
