import "./RowComponentV4.css"

function RowComponentV4(props) {
    return (
        <div className="twitch-wrapper">
            <div className="twitch-row-wrapper">
                <div className="twitch-first-column">
                    <div className="twitch-row-title">
                        {props.children}
                    </div>
                    <p className="bottom-text">
                        {props.description}
                    </p>
                </div>
                <div className="twitch-second-column">
                    <a
                        href={props.link}
                        target="blank">
                        <img alt="" src={props.img}></img>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default RowComponentV4;