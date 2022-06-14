import {Routes, Route, BrowserRouter} from 'react-router-dom';
import App from "./App";
import Home from "./pages/Home";
import Games from './pages/Games/index';


const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<div>123</div>}>
                <Route index element={<div>321</div>}/>
                <Route path={'/browse'} element={<div>Games</div>}/>
            </Route>
            <Route path={'/games'} element={<Games />}/>
        </Routes>

    )
}

export default AppRouter
