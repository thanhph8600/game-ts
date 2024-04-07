import express, { Express, Request, Response } from 'express';
import pokemonModel from '../models/pokemon.model';

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


class Pokemon{
    
    constructor() {}

    async getPokemon(req: Request, res: Response) {
        let index = Number(req.query.index)
        if(!index) index = 2
        try {
            let arrIndex = shuffleArray(random(index))
            let data = await pokemonModel.get(arrIndex)
            let name = localStorage.getItem('savedName');
            res.render('gamePokemon',{pokemon: data, index:index,name: name});
        } catch (error) {
            console.log(error);
            
            res.status(500).send('Internal Server Error');
        }
    }
    
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
}


function random(count:number): number[]{
    var arrID:number[] = []
    for (let i = 0; i < count; ) {
        const element = arrID[i];
        let index = Math.round(Math.random() * 300 + 1)
        
        if(index%3 == 1) {index += 2}
        if(index%3==2) {index += 1}
        
        let check = false
        for (let y = 0; y < arrID.length; y++) {
            if(arrID[y]==index){
                check = true
                break;
            }
        }
        if(!check){
            arrID.push(index)
            arrID.push(index)
            i++
        }
    }
    return arrID
}


export default new Pokemon