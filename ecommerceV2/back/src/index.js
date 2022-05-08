import express from 'express';
import path from 'path'
import router from './routes';
import { initWsServer } from './controllers/socket';
import "dotenv/config"










const PUBLIC_PATH = path.resolve(__dirname, '../public')
const PORT = 8080;

const app = express();

const server = app.listen(PORT, () => console.log('server up en puerto', PORT))

initWsServer(server);

server.on('error', (err) => {
    console.log('ERROR =>', err);
});


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(PUBLIC_PATH))

app.use('/', router)







