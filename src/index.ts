import http from 'http';
import Express, { Application } from 'express';
import mainRouter from './router/main';


const app: Application = Express();

app.use('/', mainRouter);

const server = http.createServer(app);
server.listen(3000);

server.on('error', error => {
    console.error(`Error HTTPD Server: ${error.message}`);
    process.exit();
});

server.on('listening', () => {
    console.info('Application listening on http://localhost:3000');
});
