import style from '../../styles/About.module.css';
import Image from 'next/image';

export default function About(){
    return(
        <div className={style.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula, erat eget bibendum ullamcorper, nulla quam faucibus ex, id sodales felis erat eget ex. Aenean euismod dui ut magna euismod, a aliquet tellus varius. In id erat sit amet dui cursus congue. In hac habitasse platea dictumst. Vivamus quis justo non tellus blandit fermentum. </p>
            <Image src='/images/charizard.png' width={300} height={300} alt='Charizard' />
        </div>
    );
}