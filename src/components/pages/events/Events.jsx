import Header from "../../Header";
import PageHeader from "../../pageHeader/PageHeader";
import HeaderV1 from "../../smallComponents/headerV1/HeaderV1";
import BasicPosterVertical from "../../postersComponents/BasicPosterVertical";

import WobblyBackground from "../../../assets/headerBackgrounds/BackgroundsTest1/wibblyinvisibleperson.gif"
import YellowPoster from "../../../assets/posterPictures/MarchMadnePoster.jpg"
import GreenPoster from "../../../assets/posterPictures/FirstPartPoster.png"

function Events() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Events"></PageHeader>
        <HeaderV1 title="Latests & Upcoming Events"></HeaderV1>
        <HeaderV1 title="House & Club (Aarhus, Denmark, 25/03/2023)"></HeaderV1>
        <BasicPosterVertical img={YellowPoster}></BasicPosterVertical>
        <HeaderV1 title="Techno & Rave (Aarhus, Denmark, 26/11/2022)"></HeaderV1>
        <BasicPosterVertical img={GreenPoster}></BasicPosterVertical>
        </div>
    )
}
export default Events;