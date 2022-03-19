import { createServer } from '@idanlo/server-utils';

const app = createServer();

app.get('/', (req, res) => {
    res.send('Hello World4');
});

app.listen(3002, () => {
    console.log('Listening...');
});
