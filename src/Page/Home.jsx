import { Helmet } from "react-helmet-async";
import Hero from "../Layout/Hero/Hero";
import WhoWeAre from "../Layout/WhoWeAre/WhoWeAre";
import OurCampaign from "../Layout/OurCampaign/OurCampaign";
import Testimonials from "../Layout/Testimonials/Testimonials";


const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Donaty</title>
            </Helmet>
            <Hero></Hero>
            <WhoWeAre></WhoWeAre>
            <OurCampaign></OurCampaign>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;