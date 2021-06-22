import React, {useState} from 'react';

const Home = () => {
    const [mobile] = useState((window.innerWidth < 500));

    const landing_styles = {
        background: `crimson`,
        color: `white`,
        borderRadius: `15px`,
        boxShadow: `0 0 20px #ddd`,
        padding: `2vw 5vw`,
        marginBottom: `20px`
    }

    return (
        <div style={landing_styles}>
            <h1 style={!mobile ? {fontSize: `4rem`} : {}}>I'm Nikhil Kadyan.</h1>
            <p>Full Stack Dev, Geek and a Gamer. Living in my own peace.</p>
        </div>
    )
}


export default Home;