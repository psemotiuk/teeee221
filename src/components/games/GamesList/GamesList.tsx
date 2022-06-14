import React from 'react';
import styles from './styles.module.scss';
import GameCard from "../GameCard/GameCard";


const GamesList = ({games}: any) => {
    return (
        <div className={styles.gamesList}>
            {games.map(({img, name, price}: any) => (
                <GameCard imgSrc={img} name={name} price={price}/>
            ))}
        </div>
    );
};

export default GamesList;
