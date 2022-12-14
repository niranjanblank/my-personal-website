import Line from '../TimeLine/Line/Line'
import styles from './styles.module.css'
import TechItem from './TechItem'

const techList = [
    {
        id: 1,
        name:"Python",
        normalImage:"./assets/python/python_gray.png",
        hoverImage:"./assets/python/python_color.png",
        height: '60px',
        width: '60px'
    },
    {
        id: 2,
        name:"JavaScript",
        normalImage:"./assets/js/js_gray.png",
        hoverImage:"./assets/js/js_color.png",
        height: '60px',
        width: '60px'
    },
    {
        id: 3,
        name:"ReactJS",
        normalImage:"./assets/reactjs/reactjs_gray.png",
        hoverImage:"./assets/reactjs/reactjs_color.png",
        height: '60px',
        width: '60px'
    },
    {
        id: 4,
        name:"MySQL",
        normalImage:"./assets/mysql/mysql_gray.png",
        hoverImage:"./assets/mysql/mysql_color.png",
        height: '60px',
        width: '60px'
    },
    {
        id: 5,
        name:"Firebase",
        normalImage:"./assets/firebase/firebase_gray.png",
        hoverImage:"./assets/firebase/firebase_color.png",
        height: '60px',
        width: '45px'
    },
    {
        id: 6,
        name:"AWS",
        normalImage:"./assets/aws/aws_gray.png",
        hoverImage:"./assets/aws/aws_color.png",
        height: '60px',
        width: '70px'
    },
    {
        id: 7,
        name:"Django",
        normalImage:"./assets/django/django_gray.png",
        hoverImage:"./assets/django/django_color.png",
        height: '60px',
        width: '85px'
    },
    {
        id: 8,
        name:"Tensorflow",
        normalImage:"./assets/tensorflow/tf_gray.png",
        hoverImage:"./assets/tensorflow/tf_color.png",
        height: '60px',
        width: '60px'
    },
    {
        id: 9,
        name:"HTML",
        normalImage:"./assets/html/html_gray.png",
        hoverImage:"./assets/html/html_color.png",
        height: '70px',
        width: '95px'
    },
    {
        id: 10,
        name:"CSS",
        normalImage:"./assets/css/css_gray.png",
        hoverImage:"./assets/css/css_color.png",
        height: '60px',
        width: '60px'
    },
   
]
const TechStack = () => {
    return (
        <div className={styles.container}>
                <h1 className={styles.tech_header}> Technologoies I Use </h1>
               
            <div className={styles.techstack_container}>
            {
                techList.slice(0,6).map(item=> {
                    return (
                    <TechItem key={item.id} image={item}/>
                    )
                })
            }
            </div>

            <div className={styles.techstack_container}>
            {
                techList.slice(6).map(item=> {
                    return (
                    <TechItem key={item.id} image={item} />
                    )
                })
            }
            </div>
                and more...
               <Line height="40px"/> 
        </div>
    )
}

export default TechStack