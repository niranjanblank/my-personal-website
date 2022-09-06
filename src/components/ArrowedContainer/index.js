import styles from './styles.module.css'
const ArrowedContainer = (props) => {
    return (
        <div className={styles.arrowed_container}>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default ArrowedContainer