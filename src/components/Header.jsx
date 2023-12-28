import "./Header.css"
import "./GlitchSupport.css"
import WobblyBackground from "../assets/headerBackgrounds/WobblyBackground.gif"

function Header() {
    return (
        <div className="header-wrapper">
            <img className="vanilla-wobbly-img" src={WobblyBackground} alt="" />
            <div className="links-wrapper">
                <div className="glitch-support">About</div>
                <div className="glitch-support">Music</div>
                <div className="glitch-support">Events</div>
                <div className="glitch-support">Kupsko</div>
            </div>
        </div>
    );

}

export default Header;