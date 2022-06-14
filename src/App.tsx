import React, {useEffect} from 'react';
import GamesList from "./components/GamesList";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {fetchGamesRequest, fetchGamesSuccess} from "./store/actions/gameAction";
import Home from "./pages/Home";
import AppRouter from "./routes";
import Header from "./components/base/Header/Header";
import {GamesState} from "./types/gameTypes";


const App = () => {
    const games: GamesState = useSelector((state: any) => state.games)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('NavigatorIsOnline', navigator.onLine)
    }, [])
    //
    // useEffect(() => {
    //     dispatch(fetchGamesRequest())
    // }, [])
    // useEffect(() => {
    //
    //     console.log('games', games)
    // }, [games])
    return (
        <>
            <Header error={games.error}/>
            <AppRouter/>
        </>

    )
    // // games.games.length > 0 ?
    // //     <div>
    //         <GamesList games={games.games}/>
    //     </div>
    //     :
    //     <p>
    //         loading ...
    //     </p>

    {/*<Header/>*/

    }


}

export default App;
