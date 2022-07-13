import {Route, Routes} from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
    return <div>
        <Layout>
            <Routes>
                <Route path='/' element={
                    <AllMeetUps/>
                }>
                </Route>
                <Route path='/new-meetup' element={
                    <NewMeetUps/>
                }>
                </Route>
                <Route path='/favorites' element={
                    <Favorites/>
                }>
                </Route>
            </Routes>
        </Layout>
    </div>;
}

export default App;