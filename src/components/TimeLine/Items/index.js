import ArrowedContainer from "../../ArrowedContainer"
import Circle from "../Circle"
import Line from "../Line/Line"
import styles from "./styles.module.css"
const Items = () => {
    return (
        <div className={styles.item_container}>
            <div className={styles.left_item}>
                <ArrowedContainer title="Hello World" body="This is body of 1" type="left"/>
            </div>
            <div className={styles.center_item}>
                <Line height="175px"/>
                <Circle/>
                <Line height="175px"/>

            </div>
            <div className={styles.right_item}>
                <ArrowedContainer title="Hello World Lorem Ipsum" body="This is body of Lorem Ipsum" type="right"/>
            </div>

        </div>
    )
}

export default Items