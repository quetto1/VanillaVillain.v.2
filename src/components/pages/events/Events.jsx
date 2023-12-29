import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
import PageHeader from "../../pageHeader/PageHeader";

function Events() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Events"></PageHeader>

        </div>
    )
}
export default Events;