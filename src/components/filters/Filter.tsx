import React from 'react';
import styles from './styles.module.scss'
import Search from "./Search/Search";

const Filter = () => {
    return (
        <div className={styles.filterContainer}>
            Filter

            <Search />
        </div>
    );
};

export default Filter;
