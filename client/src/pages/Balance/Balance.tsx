import React from "react";
import {
    Announcement,
    NavBar,
    CurrentlyBalance,
    ListInformation,
    FilterToolBar,
} from '../../components'

function Home() {
    return (
        <div>
            <Announcement />
            <NavBar />
            <CurrentlyBalance />
            <FilterToolBar />
            <ListInformation />
        </div>
    );
}

export default Home;