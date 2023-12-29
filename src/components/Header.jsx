import "./Header.css"
import glitchStyles from "./GlitchSupport.module.css"

import { NavHashLink as Link } from 'react-router-hash-link';

function Header(props) {
    return (
        <div className="header-wrapper">
            <img className="vanilla-wobbly-img" src={props.img} alt="" />
            <div className="links-wrapper">
                <div><Link to="/#about-header" className={glitchStyles['glitch-support']}>About</Link></div>
                <div><Link to="/music" className={glitchStyles['glitch-support']}>Music</Link></div>
                <div><Link to="/events" className={glitchStyles['glitch-support']}>Events</Link></div>
                <div><Link to="/kupsko" className={glitchStyles['glitch-support']}>Kupsko</Link></div>
            </div>
        </div>
    );

}

export default Header;