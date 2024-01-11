import ReactPlayer from "react-player";
import "./MixCloudPlayer.css";

function MixCloudPlayer(props) {
    return (
        <div className="mix-cloud-player-wrapper">
            <ReactPlayer
                url={props.url}
                width="100%"
                height={180}
            />
        </div>
    )
}

export default MixCloudPlayer;