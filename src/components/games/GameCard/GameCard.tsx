import React from 'react';
import styles from './styles.module.scss';

interface IProps {
    imgSrc: string;
    name: string;
    price: string
}

const GameCard = ({imgSrc, name, price}: IProps) => {
    console.log('src', imgSrc)
    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={imgSrc} alt={name} />
            <p className={styles.card__title}>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default GameCard;
