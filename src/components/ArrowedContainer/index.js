import styles from './styles.module.css'
import { motion } from 'framer-motion'
const ArrowedContainer = (props) => {

    return (
        <motion.div className={styles.outer_container}
        initial={{ opacity:0, scale:0.8}}
       whileInView={{opacity:1,scale: 1}}
       transition={{delay:0.1, duration:0.5}}
        >   
            {props.type==='right' && (<div className={styles.right_arrow}/>)}

            <div className={styles.arrowed_container}>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </div>
            {props.type==='left' && (<div className={styles.left_arrow}/>)}
             
             

        </motion.div>
    )
}

export default ArrowedContainer