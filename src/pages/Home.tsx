import React from 'react';
import Header from "../components/base/Header/Header";
import Main from "../components/base/Main/Main";

const Home = () => {
    return (
        <div>
            <Header error={null}/>
            <Main/>
        </div>
    );
};

export default Home;
