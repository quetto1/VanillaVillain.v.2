import "./RowComponentV1.css"

function RowComponent1(props) {
    return (
        <div className="about-first-row-wrapper">
            <div className="about-first-row-first-column">
                <div className="first-row-title">
                    {props.children}
                </div>
                <p className="middle-text"> <a href={props.link} target="blank"><div className="discover-ele">{props.spinDescription}</div></a> </p>
                <p className="bottom-text">{props.description}</p>
            </div>
            <div className="about-first-row-second-column">
                <img alt="" src={props.img}></img>
            </div>
        </div>
    )
}
export default RowComponent1;