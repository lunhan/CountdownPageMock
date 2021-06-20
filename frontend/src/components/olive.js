import {useState} from 'react';
import './olive.css';
import olive from '../static/olive.png';


export default function Olive(){


    return(
        <div>
            <span className="ask">
                Ask Olive
            </span>
            <button className="olive-icon">
                <img src={olive} className="o-logo"></img>
            </button>

        </div>
    );
}