import React from 'react'
import {Link} from 'react-router-dom'

import './jumbotronComponent.sass'

const JumbotronComponent = () => {
    return (
        <div className="col-lg-10 offset-lg-1">
            <h1 className="title-big">Everything You Love About Coffee</h1>
            <img className="beanslogo" src={process.env.PUBLIC_URL + '/logo/Beans_logo.svg'} alt="Beans logo"></img>
            <div className="preview__subtitle">We makes every day full of energy and taste</div>
            <div className="preview__subtitle">Want to try our beans?</div>
            <Link to='/coffee/' className="preview__btn">More</Link>
        </div>
    )
}

export default JumbotronComponent