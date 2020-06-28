import React, {useContext} from 'react';
import { ModeContext } from './ModeContext/ModeContext';
import SearchBar from './SearchBar';


const Home = () => {
    let { darkmode, setDarkmode } = useContext(ModeContext);

    return (
        // <div className={darkmode ? 'dark-mode' : 'light-mode'}>
        //     <div style={{ marginTop: "5rem" }} className={darkmode ? 'dark-mode' : 'light-mode'}>Home page</div>
        //     <h1 className={darkmode ? 'dark-mode' : 'light-mode'}>Home Page</h1>
        // </div>
        <div style={{ paddingTop: "5rem" }} className="container bg-light">
            <div className="row">
                <SearchBar/>
            </div>
        </div>
    )
}

export default Home;