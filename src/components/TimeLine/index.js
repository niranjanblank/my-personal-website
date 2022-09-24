
import ArrowedContainer from '../ArrowedContainer'
import Items from './Items'
import Line from './Line/Line'
import styles from './styles.module.css'

const TimeLine = () => {
    return (
        <div className={styles.timeline_background}>

            <Line height="60px"/>
                <Items 
                leftItem = {
                    (<ArrowedContainer title="Completed High School" body="Uniglobe High School Completed in 2016" type="left"/>)
                }
                rightItem = {
                    (<ArrowedContainer title="Uniglobe High School" body="Studied in Science Stream" type="right"/>)
                }
                />
            <Line height="80px"/>
            <Line height="60px"/>
            <Items 
                leftItem = {
                    (<ArrowedContainer title="Bachelor's of Computer Engineering" body="Tribhuvan University" type="left"/>)
                }
                rightItem = {
                    (<ArrowedContainer title="Tribhuvan University" body="Studied in Science Stream" type="right"/>)
                }
                />
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