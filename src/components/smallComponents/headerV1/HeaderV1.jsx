import "./HeaderV1.css"


function HeaderV1(props) {
    return(
        <div className="header-v1-wrapper">
            <h1 className="header-v1-wrapper">
                {props.title}
            </h1>
        </div>
    )
    
}

export default HeaderV1;