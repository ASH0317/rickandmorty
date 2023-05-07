import React from 'react';
import { Link } from 'react-router-dom';
import Status from '../../../utils/status/status';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {

    return (
        <ul className={styles.container}>

            {people.map((element) =>
                <li className={styles.list} key={element.id}>
                    <div className={styles.element}>

                        <Link to={`/character/${element.id}`}>
                            <img className={styles.img} src={element.img} alt="..." />
                        </Link>

                        <div className={styles.right_column}>

                            <Link className={styles.link} to={`/character/${element.id}`}>
                                <h2 className={styles.title}>{element.name}</h2>
                            </Link>
                            <div className={styles.element2}>
                                <p className={styles.subtitle}>status:</p>
                                <div className={styles.element3}>
                                    <Status status={element.status} />
                                    <p className={styles.status}>{element.status} </p>
                                </div>
                            </div>

                            <div className={styles.element2}>
                                <p className={styles.subtitle}>species:</p>
                                <p className={styles.status}>{element.species}</p>
                            </div>

                        </div>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default PeopleList;