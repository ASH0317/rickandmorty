import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import main from './img/ico.png';

import styles from './Header.module.css';

const Header = () => {

    const [count, setCount] = React.useState(0);

    const storeData = useSelector(store => store)

    React.useEffect(() => {
        const lengthCharacter = Object.keys(storeData.favoriteCharacterReducer).length;  
        const lengthEpisode = Object.keys(storeData.favoriteEpisodeReducer).length;
        const lengthLocation = Object.keys(storeData.favoriteLocationReducer).length;
        const res = lengthCharacter + lengthEpisode + lengthLocation;
        setCount(res)
    }, [storeData.favoriteCharacterReducer, storeData.favoriteEpisodeReducer, storeData.favoriteLocationReducer])

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <NavLink className={styles.link} to='/character/?page=1'><h2 className={styles.list}>Characters</h2></NavLink>
                <NavLink className={styles.link} to='/episode/?page=1'><h2 className={styles.list}>Episodes</h2></NavLink>
                <NavLink className={styles.link} to='/location/?page=1'><h2 className={styles.list}>locations</h2></NavLink>

                <NavLink className={styles.link_f} to='/favorites'>
                    <h2 className={styles.list}>Favorites</h2>
                    <span className={styles.counter}>{count}</span>
                </NavLink>


            </nav>
            <div className={styles.main}>
                {/* <img className={styles.ico} src={main} alt="The Rick and Morty" /> */}
                <h1 className={styles.ram}>The Rick and Morty</h1>
                <h1 className={styles.title}>WIKI</h1>
            </div>
        </div>
    )
}

export default Header;