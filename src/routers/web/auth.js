import { Router } from 'express';
import path from 'path';

const __dirname = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../views/');
const authWebRouter = new Router()

authWebRouter.get('/', (req, res) => {
    res.redirect('/login');
})

authWebRouter.get('/login', (req, res) => {
    res.sendFile('login.html', { root: __dirname});
})

authWebRouter.get('/logout', (req, res) => {
    const nombre = req.session.nombre;
    req.session.destroy(err => {
        if (err) {
            res.json({ status: 'Logout error', body: err });
        } else {
            res.render('pages/logout', { nombre: nombre });
        }
    });
})


authWebRouter.post('/login', (req, res) => {
    const { nombre } = req.query;

    req.session.nombre = nombre;
})



export default authWebRouter