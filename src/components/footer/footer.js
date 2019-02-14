import React from 'react'
import {Link} from 'react-router-dom'

import './footer.sass'

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to='/'>
                                    <img src={process.env.PUBLIC_URL + '/logo/Logo_black.svg'} alt="logo"></img>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/coffee/'>
                                    Our coffee
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/goods/'>
                                    For your pleasure
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={'/logo/Beans_logo_dark.svg'} alt="Beans logo"></img>
            </div>
        </div>
    )
}

export default Footer