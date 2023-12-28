import "./Header.css"
import "./GlitchSupport.css"
import WobblyBackground from "../assets/headerBackgrounds/WobblyBackground.gif"

import { NavHashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <div className="header-wrapper">
            <img className="vanilla-wobbly-img" src={WobblyBackground} alt="" />
            <div className="links-wrapper">
                <div><Link to="/" className="glitch-support">About</Link></div>
                <div><Link to="/music" className="glitch-support">Music</Link></div>
                <div><Link to="/events" className="glitch-support">Events</Link></div>
                <div><Link to="/kupsko" className="glitch-support">Kupsko</Link></div>
            </div>
        </div>
    );

}

export default Header;