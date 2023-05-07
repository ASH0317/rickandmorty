import { Link } from 'react-router-dom';

import ico from './img/ico.png'
import styles from './PeopleNav.module.css';

const PeopleNav = ({ numPageMemo, page, prevPage, nextPage, counterPage}) => {

    let arrNum = [];

    for (let index = 1; index <= numPageMemo; index++) {
        arrNum.push(index)
    }

    return (
        <div className={styles.container}>


            <Link className={styles.link} to={`/${page}/?page=${counterPage - 1}`}>
                <button
                    disabled={prevPage == null}
                    className={styles.btn}>
                    <img src={ico} alt="<" className={styles.left}/>
                </button>
            </Link>


            <div className={styles.container_count}>
                {arrNum.map((element) =>

                    <Link key={element} to={`/${page}/?page=${element}`} className={counterPage === element ? styles.current : styles.count}>{element}</Link>

                )}

            </div>


            <Link className={styles.link} to={`/${page}/?page=${counterPage + 1}`}>
                <button
                    disabled={nextPage == null}
                    className={styles.btn}>
                    <img src={ico} alt="<" className={styles.right}/>
                </button>
            </Link>


        </div>
    )
}

export default PeopleNav;