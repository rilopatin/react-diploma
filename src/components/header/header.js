import React from 'react'
import {Link} from 'react-router-dom'

import '../header/header.sass'

const Header = () => {
    return (
        <div>
            <ul className="header">
                <li className="header__item">
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/logo/Logo.svg'} alt="logo"></img>
                    </Link>
                </li>
                <li className="header__item">
                    <Link to='/coffee/'>
                        Our coffee
                    </Link>
                </li>
                <li className="header__item">
                    <Link to='/goods/'>
                        For your pleasure
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header