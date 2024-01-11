import "./YoutubeVideoComponent.css"

function YoutubeVideoComponent(props) {
    return (
        <div className="youtube-wrapper">
            <iframe className="youtube-player"
                src={props.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>{" "}
            <p>{props.description}</p>
        </div>
    )
}

export default YoutubeVideoComponent;