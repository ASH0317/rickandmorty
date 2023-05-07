

import styles from './ErrorMassage.module.css';

const ErrorMassage = () => {
    return (
        <>
            <p className={styles.text}>The server cannot receive information from the service <a href='https://rickandmortyapi.com/' className={styles.span}>https://rickandmortyapi.com/</a> </p>
        </>
    )
}

export default ErrorMassage;