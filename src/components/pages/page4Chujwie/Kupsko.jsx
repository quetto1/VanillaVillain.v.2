import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
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