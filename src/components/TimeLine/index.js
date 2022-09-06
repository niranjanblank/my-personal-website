import ArrowedContainer from '../ArrowedContainer'
import Circle from './Circle'
import Items from './Items'
import Line from './Line/Line'
import styles from './styles.module.css'

const TimeLine = () => {
    return (
        <div className={styles.timeline_background}>

            <Line height="60px"/>
                <Items/>
            <Line height="80px"/>
            <Line height="60px"/>
                <Items/>
            <Line height="80px"/>
            <Line height="60px"/>
                <Items/>
            <Line height="80px"/>
            <Line height="60px"/>
                <Items/>
            <Line height="80px"/>
        </div>
    )
}

export default TimeLine