import style from '../styles/Layout.module.css'
import MainNavigation from "../layout/MainNavigation";


const Layout = (props) => {
    return (
        <div>
            <MainNavigation/>
            <main className={style.main}>{props.children}</main>
        </div>
    );
};

export default Layout;