import style from '../styles/MeetupList.module.css'
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
    return (
        <ul className={style.list}>
            {props.items.map(item =>
                <MeetupItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    address={item.address}
                    description={item.description}/>)}
        </ul>

    )
}
export default MeetupList