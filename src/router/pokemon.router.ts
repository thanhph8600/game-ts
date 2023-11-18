import express, { Express, Request, Response } from 'express';
import Pokemon from '../controllers/pokemon.controller';

let router = express.Router()

router.get('/', Pokemon.getPokemon)


export default  router
