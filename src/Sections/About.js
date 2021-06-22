import React, {useState} from 'react';

const About = () => {

    const [isMobile] = useState((window.innerWidth < 500))

    const landing_styles = {
        borderRadius: `15px`, boxShadow: `0 0 20px #ddd`, padding: isMobile ? `40px` : `2vw 5vw`,
        marginBottom: `20px`
    }

    const content_div_style = {marginTop: `60px`, display: `flex`, flexWrap: isMobile ? `wrap` : `no-wrap`}

    const avatar_mobile_style = {height: `140px`, width: `140px`, borderRadius: `50%`}

    const avatar_style = {height: `240px`, width: `240px`, borderRadius: `50%`}

    const about_para_style = {fontWeight: `300`, lineHeight: `1.2rem`, fontSize: `0.9rem`, color: `#111`}

    const cv_button_style = {
        borderRadius: `17px`,
        background: `#f44336`,
        padding: `8px 25px`,
        margin: `5px 0`,
        display: `inline-block`,
        color: `white`,
        textDecoration: `none`,
        marginRight: `10px`
    }

    const hire_button_style = {
        borderRadius: `17px`,
        background: `#2979ff`,
        padding: `8px 25px`,
        display: `inline-block`,
        color: `white`,
        textDecoration: `none`
    }

    return (
        <div style={landing_styles}>
            <b style={{borderBottom: `4px solid #f44336`, borderRadius: `4px`, fontSize: `2rem`}}>About Me</b>
            <div style={content_div_style}>
                <img src="https://pbs.twimg.com/profile_images/1407424052071866371/VR2vw3sy_400x400.jpg" alt="me"
                     style={isMobile ? avatar_mobile_style : avatar_style}/>
                <div style={{margin: isMobile ? 0 : `-1vw 7vw 0 5vw`}}>
                    <h2 style={{fontWeight: `900`}}>Hello world,</h2>
                    <p style={about_para_style}>
                        I am Nikhil Kadyan, a developer from India. I have rich experience in web application building
                        and customization. Having a professional experience of more than 2 years, I enjoy guiding and
                        mentoring students and fellow mates in their learning
                        paths. Definitely loves to explore beyond the limits.
                    </p>
                    <div className="info">
                        <p><span style={{fontWeight: `300`}}>Location</span>: Panipat, Haryana</p>
                        <p><span style={{fontWeight: `300`}}>Email</span>: 00silky.tunes@icloud.com</p>
                    </div>
                    <div>
                        <a href="https://www.icloud.com/iclouddrive/0LTJ25vqeqhCjsVvp9p3XzvTw#Resume" target="_blank"
                           rel="noreferrer" style={cv_button_style}>Download CV</a>
                        <a href="mailto:00silky.tunes@icloud.com" style={hire_button_style}>Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;