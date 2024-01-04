import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
import "./About.css"
import PageHeader from "../../pageHeader/PageHeader";
import RowComponent1 from "../../rowComponentV1/RowComponentV1";
import RowComponent2 from "../../rowComponentV2/RowComponentV2";
import VanillaVillanPhoto1 from "../../../assets/pagePhotos/vv1.jpg"


function About() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="About"></PageHeader>
        <RowComponent2 img={VanillaVillanPhoto1}></RowComponent2>
        </div>
    )
}
export default About;