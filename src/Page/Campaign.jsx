import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Card from "../component/Card/Card";


const Campaign = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Campaign</title>
            </Helmet>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Campaign;