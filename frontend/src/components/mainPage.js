import {useState, React} from 'react';
import home from '../static/home.png';
import './mainPage.css';
import Shopping from './shopping/shopping';
import Header from './head/header';
import Search from './head/search';
import Delivery from './head/delivery';
import MaterialOverview from './head/new-search';
import Bottom from './bottom/bottom';
import License from './bottom/license';
import Olive from './olive';
import Detail from './shopping/items/detail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";


export default function MainPage(){
    const [id, setId] = useState([])


    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Delivery/>
            </div>
            {/* <div id='fixed-menu' className={`menu ${needFixed ? 'fixed' : ''}`}> */}
            <div className="search-bar sticky-top">
                <Search/>
            </div>
            {/* <div className="search-bar">
                <MaterialOverview/>
            </div> */}
            {/* <div className="section">
                <a><img src={home}/> : Home</a>
            </div> */}
            <Router>
                <Switch>
                    <div className="shopping">
                        <Route exact path='/'>
                            <Shopping/>
                        </Route>
                        <Route exact path='/detail'>
                            <Detail/>
                        </Route>   
                    </div>
                </Switch>
            </Router>
            {/* <div className="shopping">
                <Shopping/>
            </div> */}
            <div>
                <Bottom/>
            </div>
            <div>
                <License/>
            </div>
            <div className="olive">
                <Olive/>
            </div>
        </div>
    );
}