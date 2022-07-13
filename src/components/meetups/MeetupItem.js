import style from '../styles/MeetupItem.module.css'
import Card from "../ui/Card";

const MeetupItem = (props) => {
    return (
        <li>
            <Card>
                <div className={style.item}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={style.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={style.actions}>
                    <button>To Favorite</button>
                </div>
            </Card>
        </li>
    )
}
export default MeetupItem