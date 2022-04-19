import express from 'express';
import cors from 'cors';
import routeUsuario from './route/usuario';
const app = express();
// middleware
app.use(cors());
app.use(express.json());
// routes
app.use('/user', routeUsuario);
// server
app.listen(8000, () => {
    console.log("Server Up");
});