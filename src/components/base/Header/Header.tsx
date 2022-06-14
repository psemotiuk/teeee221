import React from 'react'
import styles from './styles.module.scss'
import {Link} from "react-router-dom";

interface IProps {
    error: string | null
}

const Header = ({error}: IProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>GameStore</h2>
                <Link className={styles.header__link} to={'/games'}>Games</Link>
                <p>Profile</p>
            </div>

            {error && <p style={{backgroundColor: 'lightyellow', textAlign: 'center'}}>
                We have an error
            </p>}
        </div>

    );
};

export default Header;
