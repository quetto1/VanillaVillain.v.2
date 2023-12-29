import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/RecBackground50FPS.gif"
import PageHeader from "../../pageHeader/PageHeader";


function Kupsko() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="XDD"></PageHeader>
            Kupsko Page
        </div>
    )
}
export default Kupsko;