import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
import PageHeader from "../../pageHeader/PageHeader";
import MixCloudPlayer from "../../mixCloudPlayer/MixCloudPlayer";
import YoutubeVideoComponent from "../../youtubeVideoComp/YoutubeVideoComponent";
import HeaderV1 from "../../smallComponents/headerV1/HeaderV1";

function Music() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Music"></PageHeader>
        <HeaderV1 title="DISCOVER DJ MIXES"></HeaderV1>
        <YoutubeVideoComponent link="https://www.youtube.com/embed/HYTQc7sXvnk?start=1" description="VANILLA_SUMMER WAVE DJ _SET"></YoutubeVideoComponent>
        <HeaderV1 title="LIVE VANILLA VILLAIN GIGS"></HeaderV1>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/summer-drive-mix/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/zooluft-exp4-vv-mix/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/hip-hop-cut/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/techno-cut/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/disco-and-house/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/part1/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/part2/"></MixCloudPlayer>
        <MixCloudPlayer url="https://www.mixcloud.com/thevanillavillain/p3/"></MixCloudPlayer>
        </div>
    )
}
export default Music;