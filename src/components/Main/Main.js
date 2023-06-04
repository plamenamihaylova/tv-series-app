import {Routes, Route} from 'react-router-dom'
import Series from '../containers/series/Series';

function Main (props) {

    return (
        <Routes>
            <Route path='/' Component={Series}></Route>
        </Routes>
    )
}

export default Main;