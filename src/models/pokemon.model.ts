import axios, { AxiosResponse } from 'axios';

interface pokemon{
    id:number,
    name:string,
    thumb:string,
    type:string,
}
class Pokemon {
    private url = 'https://pokeapi.co/api/v2/pokemon/'

    async get(arrIndex:number[]){
        try {
            let result:object[] = []
            for (let i = 0; i < arrIndex.length ; i++) {
                let element = arrIndex[i]
                const response: AxiosResponse = await axios.get(this.url + element);
                const data = response.data;
                let item: pokemon = {
                    id: data.id,
                    name: data.name,
                    thumb: data.sprites.front_default,
                    type: data.types[0].type.name
                };

                result.push(item)
            }
            
            return result
          } catch (error) {
            console.error('Error fetching data:', 'error.message');
          }
    }
}

export default new Pokemon