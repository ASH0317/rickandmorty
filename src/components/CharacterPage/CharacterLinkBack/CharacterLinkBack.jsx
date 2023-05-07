import { useNavigate } from 'react-router-dom';

import ico from './img/ico.png'
import styles from './CharacterLinkBack.module.css';

const CharacterLinkBack = () => {

    const history = useNavigate();

    const handleGoBack = event => {
        event.preventDefault();
        history(-1);
    }

    return (
        <div className={styles.container}>
            <a
                href='/'
                onClick={handleGoBack}
                className={styles.link}
            >
                <img className={styles.ico} src={ico} alt="<" />
                <span>Go back</span>
            </a>
        </div>
    )
}

export default CharacterLinkBack;