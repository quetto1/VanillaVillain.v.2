import Header from "../../Header";
import PageHeader from "../../pageHeader/PageHeader";

import WobblyBackground from "../../../assets/headerBackgrounds/BackgroundsTest1/wobblyDVtexture.gif"


function Contact() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Contact"></PageHeader>
            Contact Page
        </div>
    )
}
export default Contact;