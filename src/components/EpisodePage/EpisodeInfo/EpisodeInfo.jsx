import React from 'react';
import { useDispatch } from 'react-redux';
import { setEpisodeToFavorite, removeEpisodeToFavorite } from '../../../store/actions';
import { useSelector } from 'react-redux';


import styles from './EpisodeInfo.module.css';

import ico1 from './img/ico1.png'
import ico2 from './img/ico2.png'

const EpisodeInfo = ({ episodeInfo }) => {

    const [episodeFavorite, setEpisodeFavorite] = React.useState(false)

    const dispatch = useDispatch();

    const storeData = useSelector(state => state.favoriteEpisodeReducer)

    const set = () => {
        dispatch(setEpisodeToFavorite({
            [episodeInfo.id]: {
                id: episodeInfo.id,
                name: episodeInfo.name,
                date: episodeInfo.date,
                episode: episodeInfo.episode
            }
        }));
        setEpisodeFavorite(true);
    }

    const remove = () => {
        dispatch(removeEpisodeToFavorite(episodeInfo.id));
        setEpisodeFavorite(false);
    }

    React.useEffect(() => {
        storeData[episodeInfo.id] ? setEpisodeFavorite(true) : setEpisodeFavorite(false);
    }, [episodeInfo.id, storeData])

    return (
        <>


            <div className={styles.container}>


                <div className={styles.list} key={episodeInfo.id}>
                    <div className={styles.element}>

                        <div className={styles.container_name}>
                            <h2 className={styles.title}>{episodeInfo.name}</h2>

                            {episodeFavorite
                                ? <button className={styles.btn} onClick={remove}>  <img className={styles.ico} src={ico2} alt="..." /></button>
                                : <button className={styles.btn} onClick={set}> <img className={styles.ico} src={ico1} alt="..." /></button>
                            }


                        </div>




                        <div className={styles.container_block}>
                            <div className={styles.element2}>
                                <p className={styles.subtitle}>date:</p>
                                <p className={styles.status}>{episodeInfo.date} </p>
                            </div>
                            <div className={styles.element2}>
                                <p className={styles.subtitle}>season:</p>
                                <p className={styles.status}>{episodeInfo.episode.substr(1, 2)}</p>
                            </div>
                            <div className={styles.element2}>
                                <p className={styles.subtitle}>episode:</p>
                                <p className={styles.status}>{episodeInfo.episode.substr(4, 5)}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default EpisodeInfo;