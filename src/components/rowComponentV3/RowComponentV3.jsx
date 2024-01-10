import "./RowComponentV3.css"

function RowComponentV3(props) {

    return (
        <div className="about-fourth-row-wrapper">
            <div className="about-fourth-row-first-column">
                <div className="fourth-row-title">
                    {props.children} </div>
                <p className="bottom-text">{props.description}</p>
            </div>
            <div className="about-fourth-row-second-column">
                <a href={props.link} target="blank">
                    <img alt="" src={props.img}></img>
                </a>
            </div>
        </div>
    )

}


export default RowComponentV3;