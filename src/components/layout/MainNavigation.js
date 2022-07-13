import {Link} from "react-router-dom";
import style from '../styles/MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation