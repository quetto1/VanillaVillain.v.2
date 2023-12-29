import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
import "./About.css"
import PageHeader from "../../pageHeader/PageHeader";

function About() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="About"></PageHeader>
        </div>
    )
}
export default About;