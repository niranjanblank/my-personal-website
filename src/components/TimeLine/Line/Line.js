import styles from './styles.module.css'

const Line = (props) => {

    return (
        <div className={styles.line} style={{height:props.height}}>

        </div>
    )
}

export default Line