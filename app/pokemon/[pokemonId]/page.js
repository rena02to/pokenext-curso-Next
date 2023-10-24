import Image from 'next/image';
import style from '../../../styles/Pokemon.module.css';

export async function getPokemonById(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    return pokemon;
}

export async function getStaticPaths() {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const { results } = await response.json();

    const paths = results.map((pokemon, index) => ({
        params: { pokemonId: (index + 1).toString() },
    }));

    return { paths, fallback: false };
}  

export default async function Pokemon({ params }){
    const pokemon = await getPokemonById(params.pokemonId);

    return(
        <div className={style.pokemon_container}>
            <h1 className={style.title}>{pokemon.name}</h1>
            <Image src='/images/pokeball.png' width={200} height={200} alt={pokemon.name} />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={style.types}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${style.type} ${style['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={style.data_container}>
                <div className={style.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={style.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} Kg</p>
                </div>
            </div>
        </div>
    );
}