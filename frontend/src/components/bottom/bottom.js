import {useState} from 'react';
import fav from '../../static/fav.png';
import './bottom.css';


export default function Bottom(){


    return(
        <div className="container">
            <div className="row bottom-nav">
            <div className="col-sm-12 col-md-3">
                <ul>
                    <a><strong>My Lists</strong></a>
                    <li><a><img src={fav} className="fav"/>My Favourites</a></li>
                    <li><a>My Saved Lists</a></li>
                    <li><a>My Past Orders</a></li>
                    <li><a>My Saved Recipes</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
                <ul>
                    <a><strong ><a>My Account</a></strong></a>
                    <li><a>My Details</a></li>
                    <li><a>My Addresses</a></li>
                    <li><a>My Orders</a></li>
                    <li><a>My Onecards</a></li>
                    <li><a>My Delivery Savers</a></li>
                    <li><a>My Settings</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
                <ul>
                    <a><strong><a>Help</a></strong></a>
                    <li><a>FAQs</a></li>
                    <li><a>New to Online Shopping</a></li>
                    <li><a>Managing Your Account</a></li>
                    <li><a>Browsing The Store</a></li>
                    <li><a>The Checkout Process</a></li>
                    <li><a>Store Policies</a></li>
                    <li><a>Terms and Conditions</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
                <ul>
                    <a><strong>About us</strong></a>
                    <li><a>Contact us</a></li>
                    <li><a>Store Locator </a></li>
                    <li><a>Careers</a></li>
                </ul>
            </div>
            </div>
        </div>
        
    );
}