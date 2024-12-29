import React from 'react'
import { MdWatchLater } from "react-icons/md";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";
import "./Footer.css"
import img11 from '../../assets/logo11.png'

function Footer() {
  return (
    <div>
        <div className="footer__first footerer case">
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
                    <hr className='footer__hr' />
                    <div className="footer__second footerer case">
                          <img src={img11} alt="" />
                          <p style={{color: 'rgb(125, 125, 125)'}} className="footer__text">© Designed by Yellow Snow. All Rights Reserved. </p>
                        </div>
    </div>
  )
}

export default Footer