import { Helmet } from "react-helmet-async";
import Hero from "../Layout/Hero/Hero";
import WhoWeAre from "../Layout/WhoWeAre/WhoWeAre";
import OurCampaign from "../Layout/OurCampaign/OurCampaign";


const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Donaty</title>
            </Helmet>
            <Hero></Hero>
            <WhoWeAre></WhoWeAre>
            <OurCampaign></OurCampaign>
        </div>
    );
};

export default Home;