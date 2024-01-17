import "./BasicPosterVertical.css"

function BasicPosterVertical(props) {
    return (
        <div className="basic-vertical-poster-wrapper-main">
            <img src={props.img}></img>            
        </div>
    )
}

export default BasicPosterVertical