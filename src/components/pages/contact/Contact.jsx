import Header from "../../Header";
import WobblyBackground from "../../../assets/headerBackgrounds/Wobbly_black50fps.gif"
import PageHeader from "../../pageHeader/PageHeader";


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