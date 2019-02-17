import React from 'react'

const AboutProductComponent = ({text, imgSrc}) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src={imgSrc} alt="girl"></img>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={process.env.PUBLIC_URL + '/logo/Beans_logo_dark.svg'} alt="Beans logo"></img>
                        {text}
                </div>
            </div>
            <div className="line"></div>
        </>
    )
}

export default AboutProductComponent
