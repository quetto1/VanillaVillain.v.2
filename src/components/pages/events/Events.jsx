import Header from "../../Header";
import PageHeader from "../../pageHeader/PageHeader";

import WobblyBackground from "../../../assets/headerBackgrounds/BackgroundsTest1/wibblyinvisibleperson.gif"
import HeaderV1 from "../../smallComponents/headerV1/HeaderV1";

function Events() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Events"></PageHeader>
        <HeaderV1 title="Latests & Upcoming Events"></HeaderV1>
        </div>
    )
}
export default Events;