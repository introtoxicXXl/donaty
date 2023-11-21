import { useEffect, useState } from "react";
import Span from "../../Utility/Span";
import Accordion from "../../component/Accordion/Accordion";


const FAQ = () => {

    const [accordions, setAccordions] = useState([]);
    useEffect(() => {
        fetch('/accordion.json')
            .then(res => res.json())
            .then(data => setAccordions(data))
    }, [])

    return (
        <div className="container mx-auto mt-14">
            <div className="text-center space-y-6">
                <Span text='Need Help?'></Span>
                <h1 className="text-4xl font-semibold">The Answers to All Your Questions</h1>
                <div className="divider divider-info w-1/12 mx-auto"></div>
            </div>
            <div>
                {
                    accordions.map(accordion => <Accordion
                        key={accordion.id}
                        accordion={accordion}
                    ></Accordion>)
                }
            </div>
        </div>
    );
};

export default FAQ;