import Header from "../../Header";
import PageHeader from "../../pageHeader/PageHeader";
import ContactForm from "../../contactPageComponents/ContactForm";

import WobblyBackground from "../../../assets/headerBackgrounds/BackgroundsTest1/wobblyDVtexture.gif"


function Contact() {
    return(
        <div>
        <Header img={WobblyBackground}></Header>
        <PageHeader title="Contact"></PageHeader>
            <ContactForm></ContactForm>
        </div>
    )
}
export default Contact;