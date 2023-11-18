import { Express, Request, Response } from 'express';
import pokemonRouter from './pokemon.router'

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

export const router = (app: Express) => {
    app.get('/', (req: Request, res: Response) => {
        res.render('index');
    });
    app.post('/login', (req,res)=>{
        let name = req.body.name

        // Lưu giá trị vào localStorage
        localStorage.setItem('savedName', name);

        res.render('listGame')
    })
    
    app.use('/pokemon',pokemonRouter);
};