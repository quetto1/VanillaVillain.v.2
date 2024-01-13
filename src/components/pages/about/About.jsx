import "./About.css"

import Header from "../../Header";
import PageHeader from "../../pageHeader/PageHeader";
import RowComponent1 from "../../rowComponentV1/RowComponentV1";
import RowComponent2 from "../../rowComponentV2/RowComponentV2";
import RowComponentV3 from "../../rowComponentV3/RowComponentV3";
import RowComponentV4 from "../../rowComponentV4/RowComponentV4";

import WobblyBackground from "../../../assets/headerBackgrounds/BackgroundsTest1/wobbly_black2.gif"
import VanillaVillanPhoto1 from "../../../assets/pagePhotos/vv1.jpg"
import VanillaVillanPhoto2 from "../../../assets/pagePhotos/vv2.png"
import VanillaVillanPhoto3 from "../../../assets/InstaVanilla.gif"
import VanillaVillanPhoto4 from "../../../assets/twitchmixin.gif"


function About() {
    return (
        <div>
            <Header img={WobblyBackground}></Header>
            <PageHeader title="About"></PageHeader>
            <RowComponent1 img={VanillaVillanPhoto2} spinDescription="DISCOVER THE VANILLA MIXES!" link="https://www.mixcloud.com/thevanillavillain/" description="None one knows for sure who is this piece of shit, only what we can be certain of that he is an extraordinary artist and visioner, part-time DJ, and part-time Web Developer. Just a casual who whats to share his passion for music with the world. Here you can find my mixes and events that I have played on or that I'm going to play in the future so stay tuned so you can join for the next Vanilla party! "> W<div className="green-cunt5">HO</div>_<div className="green-cunt3" >IS</div> <p className="green-cunt"><div className="green-cunt4">T</div>HIS</p> <div className="green-cunt2">GUY</div>?</RowComponent1>
            <RowComponent2 img={VanillaVillanPhoto1} middleText="Zooluf Records" link="https://www.zooluft.com/" mainDescription="Vanilla Villain is a part of the Zooluft artist collective, which brings together people with all kind of passions from music through design, photography to poetry, check out the other members who share there the fruits of their hard work!"><div className="color-change-zooluft">ZOOLUFT_</div>COLLA<p className="collab-p">BORATION</p> </RowComponent2>
            <RowComponentV3 img={VanillaVillanPhoto3}  link="https://www.instagram.com/the.vanilla.villain/" description="Do you want to be up to date with events or maybe you want to send some props? Check out the Instagram the.vanilla.villain! One follow equals one soul devoured by this masked kunt."><div className="green-cunt7">INSTA</div> _<div className="green-cunt8" >GRAM</div></RowComponentV3>
            <RowComponentV4 img={VanillaVillanPhoto4} link="https://www.twitch.tv/purevanillahere" description="I also stream live music mixing on twitch.tv from time to time, come and check it out for momemnt, maybe I'm live right now!"><div className="twitch-cunt1">Twitch</div>.<div className="twitch-cunt2">tv</div></RowComponentV4>
        </div>
    )
}
export default About;