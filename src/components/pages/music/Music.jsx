import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
import PageHeader from "../../pageHeader/PageHeader";

function Music() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Music"></PageHeader>
        </div>
    )
}
export default Music;