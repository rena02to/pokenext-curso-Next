import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Card.module.css';

export default function Card({ pokemon }){
    return(
        <div className={style.card}>
            <Image src='/images/pokeball.png' width={120} height={120} alt={`${pokemon.name}`} />
            <p className={style.id}>#{pokemon.id}</p>
            <h3 className={style.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={style.btn}>Detalhes</Link>
        </div>
    );
}