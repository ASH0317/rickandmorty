import styles from './status.module.css'

const Status = ({status}) => {
    if (status === 'Alive') {
        return (
            <div className={styles.alive}></div>
        )
    }
    if (status === 'Dead') {
        return (
            <div className={styles.dead}></div>
        )
    }
    if (status === 'unknown') {
        return (
            <div className={styles.unknown}></div>
        )
    }
}

export default Status;