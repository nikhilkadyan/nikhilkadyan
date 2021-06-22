import React, {useState} from 'react';

const Blogs = () => {

    const [isMobile] = useState((window.innerWidth < 500))

    const landing_styles = {borderRadius: `15px`, boxShadow: `0 0 20px #ddd`, padding: isMobile ? `40px` : `2vw 5vw`}
    return (
        <div style={landing_styles}>
            <b style={{borderBottom: `4px solid #f44336`, borderRadius: `4px`, fontSize: `2rem`}}>Recent Blogs</b>
            <p>Still on works, but will come soon enough!</p>
        </div>
    )
}


export default Blogs;