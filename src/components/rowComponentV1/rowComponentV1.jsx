import "./RowComponentV1.css"

function RowComponent1(props) {
    return (
        <div className="about-first-row-wrapper">
            <div className="about-first-row-first-column">
                <div className="first-row-title">
                    W<div className="green-cunt5">HO</div>_<div className="green-cunt3" >IS</div> <p className="green-cunt"><div className="green-cunt4">T</div>HIS</p> <div className="green-cunt2">GUY</div>?</div>
                <p className="middle-text"> <a href="https://www.mixcloud.com/thevanillavillain/" target="blank"><div className="discover-ele">DISCOVER THE VANILLA MIXES!</div></a> </p>
                <p className="bottom-text">None one knows for sure who is this piece of shit, only what we can be certain of that he is an extraordinary artist and visioner, part-time DJ, and part-time Web Developer. Just a casual who whats to share his passion for music with the world. Here you can find my mixes and events that I have played on or that I'm going to play in the future so stay tuned so you can join for the next Vanilla party! </p>
            </div>
            <div className="about-first-row-second-column">
                <img alt="" src={props.img}></img>
            </div>
        </div>
    )
}
export default RowComponent1;