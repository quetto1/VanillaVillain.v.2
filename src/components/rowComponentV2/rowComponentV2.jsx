import "./RowComponentV2.css"

function RowComponent2(props) {
    return(
        <div className="about-third-row-wrapper">
        <div className="about-third-row-second-column">
           <a href={props.link} target="blank"><img alt="" src={props.img}></img></a> 
        </div>
        <div className="about-third-row-first-column">
            <div className="third-row-title">
            {props.children}</div>
            <p className="middle-text2">{props.middleText}</p>
            <p className="bottom-text2">{props.mainDescription}</p>
        </div>
    </div>
    )
}

export default RowComponent2;