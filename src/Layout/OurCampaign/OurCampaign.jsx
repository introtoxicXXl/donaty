import { useEffect, useState } from "react";
import Span from "../../Utility/Span";
import Card from "../../component/Card/Card";
import { Link } from "react-router-dom";


const OurCampaign = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => setCards(data.slice(0,3)))
    }, [])
    return (
        <div className="container mx-auto md:space-y-8 space-y-5 mt-14">
                <Span text='Our Campaign'></Span>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold">Giving help to those <br /> who need it</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <div className="flex justify-center my-6">
                <Link to='/campaign'> <button className="btn btn-info text-white">See All</button> </Link>
            </div>
        </div>
    );
};

export default OurCampaign;