import React from 'react';
import { Link } from 'react-router-dom';
import { makeConcurrentRequest } from '../../../utils/network';

import styles from './EpisodeList.module.css';

const EpisodeList = ({ episodeList, personInfo }) => {

    const [episodeName, setEpisodeName] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const response = await makeConcurrentRequest(episodeList);
            setEpisodeName(response);
        })();
    }, [episodeList]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title2}>Episodes with {personInfo.name}</h2>
            <ul className={styles.container}>
                {episodeName.map((element) =>

                    <li className={styles.list} key={element.id}>
                        <div className={styles.element}>

                            <Link className={styles.link} to={`/episode/${element.id}`}>
                                <h2 className={styles.title}>{element.name}</h2>
                            </Link>



                            <div className={styles.container_block}>
                                <div className={styles.element2}>
                                    <p className={styles.subtitle}>date:</p>
                                    <p className={styles.status}>{element.air_date} </p>
                                </div>
                                <div className={styles.element2}>
                                    <p className={styles.subtitle}>season:</p>
                                    <p className={styles.status}>{element.episode.substr(1, 2)}</p>
                                </div>
                                <div className={styles.element2}>
                                    <p className={styles.subtitle}>episode:</p>
                                    <p className={styles.status}>{element.episode.substr(4, 5)}</p>
                                </div>
                            </div>

                        </div>

                    </li>
                )}
            </ul>
        </div>
    )
}

export default EpisodeList;