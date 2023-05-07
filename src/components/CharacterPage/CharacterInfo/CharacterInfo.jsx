import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterInfo.module.css';
import { LOCATION } from '../../../constants/api';
import { useDispatch } from 'react-redux';
import { setCharacterToFavorite, removeCharacterToFavorite } from '../../../store/actions';
import { useSelector } from 'react-redux';

import ico1 from './img/ico1.png'
import ico2 from './img/ico2.png'



const CharacterInfo = ({ personInfo }) => {

    const [characterFavorite, setCharacterFavorite] = React.useState(false)

    const dispatch = useDispatch();

    const getLocationId = (url) => {
        const pos = url.lastIndexOf(LOCATION);
        const id = url.slice(pos + LOCATION.length, url.length);
        return Number(id);
    }

    const storeData = useSelector(state => state.favoriteCharacterReducer)

    const set = () => {
        dispatch(setCharacterToFavorite({
            [personInfo.id]: {
                name: personInfo.name,
                img: personInfo.img,
                status: personInfo.status,
                species: personInfo.species
            }
        }));
        setCharacterFavorite(true);
    }

    const remove = () => {
        dispatch(removeCharacterToFavorite(personInfo.id));
        setCharacterFavorite(false);
    }


    React.useEffect(() => {
        storeData[personInfo.id] ? setCharacterFavorite(true) : setCharacterFavorite(false);
    }, [personInfo.id, storeData])

    return (
        <>


            <div className={styles.container}>


                <div className={styles.list}>
                    <div className={styles.element}>
                        <div className={styles.bg}>
                            <img className={styles.img} src={personInfo.img} alt="..." />
                        </div>


                        <div className={styles.right_column}>
                            <div className={styles.container_name}>
                                <h2 className={styles.title}>{personInfo.name}</h2>

                                {characterFavorite
                                    ? <button className={styles.btn} onClick={remove}>  <img className={styles.ico} src={ico2} alt="..." /></button>
                                    : <button className={styles.btn} onClick={set}> <img className={styles.ico} src={ico1} alt="..." /></button>
                                }

                            </div>



                            <div className={styles.element2}>
                                <p className={styles.subtitle}>status:</p>
                                <p className={styles.status}>{personInfo.status} </p>
                            </div>

                            <div className={styles.element2}>
                                <p className={styles.subtitle}>species:</p>
                                <p className={styles.status}>{personInfo.species}</p>
                            </div>

                            <div className={styles.element2}>
                                <p className={styles.subtitle}>gender:</p>
                                <p className={styles.status}>{personInfo.gender}</p>
                            </div>

                            <div className={styles.element2}>
                                <p className={styles.subtitle}>origin:</p>

                                {personInfo.id_location === ''
                                    ? <p className={styles.status}>{personInfo.o_name}</p>
                                    : <Link className={styles.link} to={`/location/${getLocationId(personInfo.id_location)}`}>
                                        <p className={styles.status}>{personInfo.o_name}</p>
                                    </Link>
                                }



                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default CharacterInfo;