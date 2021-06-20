import {useState} from 'react';
import logo from '../../static/bottom.png';
import './bottom.css';


export default function License(){


    return(
        <div className="license">
            <a>© Woolworths New Zealand Limited 2020 - all rights reserved.</a>
            <a> liquor licences |</a>
            <a> Privacy policy |</a>
            <a> Terms & Conditions |</a> 
            <img src={logo} className="lic_logo"/>         
            {/* <nav aria-label="breadcrumb license">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item" aria-current="page">Data</li>
                <img src={logo} className="lic_logo"/>
            </ol>
            </nav>             */}
        </div>
    );
}