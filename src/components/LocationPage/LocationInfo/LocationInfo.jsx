import React from 'react';
import { useDispatch } from 'react-redux';
import { setLocationToFavorite, removeLocationToFavorite } from '../../../store/actions';
import { useSelector } from 'react-redux';

import ico1 from './img/ico1.png'
import ico2 from './img/ico2.png'


import styles from './LocationInfo.module.css';

const LocationInfo = ({ locationInfo }) => {

    const [locationFavorite, setLocationFavorite] = React.useState(false)

    const dispatch = useDispatch();

    const storeData = useSelector(state => state.favoriteLocationReducer)

    const set = () => {
        dispatch(setLocationToFavorite({
            [locationInfo.id]: {
                name: locationInfo.name,
                type: locationInfo.type,
                id: locationInfo.id,
                residents: locationInfo.residents,
            }
        }));
        setLocationFavorite(true);
    }

    const remove = () => {
        dispatch(removeLocationToFavorite(locationInfo.id));
        setLocationFavorite(false);
    }


    React.useEffect(() => {
        storeData[locationInfo.id] ? setLocationFavorite(true) : setLocationFavorite(false);
    }, [locationInfo.id, storeData])


    return (
        <>

            <div className={styles.container}>


                <div className={styles.list} key={locationInfo.id}>
                    <div className={styles.element}>

                        <div className={styles.container_name}>

                            <h2 className={styles.title}>{locationInfo.name}</h2>

                            {locationFavorite
                                ? <button className={styles.btn} onClick={remove}>  <img className={styles.ico} src={ico2} alt="..." /></button>
                                : <button className={styles.btn} onClick={set}> <img className={styles.ico} src={ico1} alt="..." /></button>
                            }

                        </div>


                        <div className={styles.container_block}>
                            <div>
                                <p className={styles.subtitle}>type:</p>
                                <p className={styles.status}>{locationInfo.type} </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default LocationInfo;