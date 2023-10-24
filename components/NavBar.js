import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/NavBar.module.css';

export default function NavBar(){
    return(
        <nav className={style.navbar}>
            <div className={style.logo}>
                <Image src='/images/pokeball.png' width={30} height={30} />
                <h1>PokeNext</h1>
            </div>
            <ul className={style.links}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}