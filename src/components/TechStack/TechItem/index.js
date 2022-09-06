import { useState } from 'react'
import styles from './styles.module.css'
const TechItem = (props) => {
    const [imgLocation,setImgLocation] = useState(props.image.normalImage)
    const onHoverHandler = (event) => {
        if(event==='enter'){
            setImgLocation(props.image.hoverImage)
        }
        else if (event==='leave'){
            setImgLocation(props.image.normalImage)
        }
    }

    return (
        <div className={styles.image_container}>
        <img src={imgLocation}
        onMouseEnter={
            ()=> {
                onHoverHandler('enter')
            }
        }

        onMouseLeave={
            ()=> {
                onHoverHandler('leave')
            }
        }
        height={props.height} width={props.width} alt={props.image.name}/>
        </div>
    )
}

export default TechItem