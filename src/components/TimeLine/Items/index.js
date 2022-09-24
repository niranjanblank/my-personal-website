import ArrowedContainer from "../../ArrowedContainer"
import Circle from "../Circle"
import Line from "../Line/Line"
import styles from "./styles.module.css"
const Items = (props) => {
    return (
        <div className={styles.item_container}>
            <div className={styles.left_item}>
                {props.leftItem}
            </div>
            <div className={styles.center_item}>
                <Line height="175px"/>
                <Circle/>
                <Line height="175px"/>
            </div>
            <div className={styles.right_item}>
                {props.rightItem}
            </div>

        </div>
    )
}

export default Items