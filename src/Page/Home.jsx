import { useEffect, useState } from "react";
import Card from "../component/Card/Card";


const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/charity.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
        
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Home;