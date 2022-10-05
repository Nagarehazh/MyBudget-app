import React from "react";
import {
    Announcement,
    NavBar,
    CurrentlyBalance,
    ListInformation,
    FilterToolBar,
    Slider,
    Footer,
} from '../../components'

function Home() {


    const DataUser = JSON.parse(localStorage.getItem('user') || '{}')

    return (
        <div>
            <Announcement />
            {DataUser.userName ?
                <React.Fragment>
                    <NavBar/>
                    <CurrentlyBalance />
                    <FilterToolBar />
                    <ListInformation />
                </React.Fragment>
                :
                <React.Fragment>
                    <NavBar />
                    <Slider />
                </React.Fragment>
            }
            <Footer/>
        </div>
    );
}

export default Home;