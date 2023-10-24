import Image from 'next/image';
import style from '../styles/page.module.css';
import Card from '../components/Card';

export async function getPokemons(){
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const response = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await response.json();

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return data.results;
}

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <div className={style.main}>
      <div className={style.title}>
        <h1>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width={50} height={50} alt='PokeNext' />
      </div>
      <div className={style.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
