import React from 'react'
import img1 from "../../assets/logo2.png"
import img2 from "../../assets/logo.png"
import { MdWatchLater } from "react-icons/md";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";

import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className="navbar__all">
        <div className="navbar case">
            {/* first */}
            <div className="navbar__first">
                <img className='navbar__img' src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            {/* second */}
            <div className="navbar__second case">
                <ul className="navbar__list">
                    <li style={{color: '#34C759'}} className="navbar__item">Menu</li>
                    <li style={{color: 'white'}} className="navbar__item">Recipes</li>
                    <li style={{color: 'white'}} className="navbar__item">Chefs</li>
                    <li style={{color: 'white'}} className="navbar__item">Contacts</li>
                </ul>
            </div>
        </div>
        <hr className='navbar__hr' />
        {/* start of second section */}
        <div className="navbars case">
            <h1 className="navbar__title"><span className='span'>Your</span> Favourite Food <br /> <span className='span'>Delivered</span> Hot & Fresh</h1>
            <p className="navbar__text">HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & <br /> marinating, so you can cook a fresh homemade dinner in just 15 minutes.</p>
            <button className="navbar__btn">Order Now</button>
            {/* info on the section */}
            <div className="navbar__third case">
                <div className="navbar__div">
                    <div className="navbar__icon"><MdWatchLater /></div>
                    <h3 style={{color: 'white'}} className="navDiv__title">Today 10:00 am - 7:00 pm</h3>
                    <p style={{color: 'rgb(152, 152, 152)'}} className="navDiv__text">Working hours</p>
                </div>
                <div className="navbar__div">
                    <div className="navbar__icon"><PiTelegramLogoDuotone /></div>
                    <h3 style={{color: 'white'}} className="navDiv__title">Velyka Vasylkivska 100</h3>
                    <p style={{color: 'rgb(152, 152, 152)'}} className="navDiv__text">Get Directions</p>
                </div>
                <div className="navbar__div">
                    <div className="navbar__icon"><IoCallSharp /></div>
                    <h3 style={{color: 'white'}} className="navDiv__title">+38 (063)833 24 15</h3>
                    <p style={{color: 'rgb(152, 152, 152)'}} className="navDiv__text">Call Online</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar