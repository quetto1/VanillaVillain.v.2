import "./RowComponentV2.css"

function RowComponent2(props) {
    return(
        <div className="about-third-row-wrapper">
        <div className="about-third-row-second-column">
           <a href="https://www.zooluft.com/" target="blank"><img alt="" src={props.img}></img></a> 
        </div>
        <div className="about-third-row-first-column">
            <div className="third-row-title">
            <div className="color-change-zooluft">ZOOLUFT_</div>COLLA<p className="collab-p">BORATION</p> </div>
            <p className="middle-text2"> Zooluf Records</p>
            <p className="bottom-text2">Vanilla Villain is a part of the Zooluft artist collective, which brings together people with all kind of passions from music through design, photography to poetry, check out the other members who share there the fruits of their hard work! </p>
        </div>
    </div>
    )
}

export default RowComponent2;