import React from 'react';

const Header = () => {

    const header_style = {
        background: `crimson`,
        borderRadius: `15px`, boxShadow: `0 0 20px #ddd`, padding: `8px`, marginBottom: `20px`,
        display: `flex`, justifyContent: `center`, alignItems: `center`
    }

    const logo_style = {
        height: `40px`,
        width: `40px`,
        borderRadius: `50%`
    }

    return (
        <div style={header_style}>
            <img src="https://i.pinimg.com/originals/7c/02/d8/7c02d8361f7acd759f197fcb243b0800.jpg" alt="N"
                 style={logo_style}/>
        </div>
    )
}


export default Header