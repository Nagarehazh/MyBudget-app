import React from "react";
import {
    Announcement,
    NavBar,
    CurrentlyBalance,
    ListInformation,
} from '../../components'

function Home() {
    return (
        <div>
            <Announcement />
            <NavBar />
            <CurrentlyBalance />
            <ListInformation />
        </div>
    );
}

export default Home;