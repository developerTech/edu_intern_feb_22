import React from 'react';
import Search from './searchComponent';
import QuickSearch from './quickComponent';
import Header from '../../header';

const Home = (props) => {
    console.log(">>>home>>>",props)
    return(
        <>
            <Header/>
            <Search/>
            <QuickSearch/>
        </>
    )
}

export default Home;