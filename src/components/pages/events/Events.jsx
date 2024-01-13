import Header from "../../Header";
import PageHeader from "../../pageHeader/PageHeader";

import WobblyBackground from "../../../assets/headerBackgrounds/BackgroundsTest1/wibblyinvisibleperson.gif"

function Events() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Events"></PageHeader>

        </div>
    )
}
export default Events;