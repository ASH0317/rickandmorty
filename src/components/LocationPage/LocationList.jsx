import { Link } from 'react-router-dom';
import styles from './LocationList.module.css';

const LocationList = ({ location }) => {


    return (
        <ul className={styles.container}>

            {location.map((element) =>
                <li className={styles.list} key={element.id}>
                    <div className={styles.element}>

                        <Link className={styles.title2} to={`/location/${element.id}`}>
                            <h2 className={styles.title}>{element.name}</h2>
                        </Link>

                        {element.residents ?
                            <div className={styles.container_block}>
                                <div>
                                    <p className={styles.subtitle}>type:</p>
                                    <p className={styles.status}>{element.type} </p>
                                </div>
                                <div>
                                    <p className={styles.subtitle}>residents:</p>

                                    <p className={styles.status}>{element.residents.length}</p>

                                </div>
                            </div>
                            : <>
                                <div className={styles.container_block_center}>
                                    <div>
                                        <p className={styles.subtitle}>type:</p>
                                        <p className={styles.status}>{element.type} </p>
                                    </div>
                                    </div>
                            </>}
                    </div>

                </li>
            )
            }
        </ul >
    )
}

export default LocationList;