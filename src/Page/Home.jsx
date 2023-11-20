import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Layout/Hero/Hero";


const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Donaty</title>
            </Helmet>
            <Hero></Hero>


        </div>
    );
};

export default Home;