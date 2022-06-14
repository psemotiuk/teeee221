    import React from 'react';


interface gamesListProps {
    games: {name: string} []
}

const GamesList = ({games}: gamesListProps): JSX.Element => {
    console.log('gamesGamesList', games[0])
    return (
        <div>

            <h1>App working!</h1>
            <h2>{games[0].name}</h2>
        </div>
    );
};

export default GamesList;
