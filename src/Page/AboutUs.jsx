import { Helmet } from "react-helmet-async";
import ImageGallery from "../component/ImageGallery/ImageGallery";


const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <ImageGallery></ImageGallery>
            <div className="md:w-2/3 w-full mx-auto">
                <h1 className="md:md:text-4xl text-2xl font-semibold my-5">About Us</h1>
                <p className="md:md:text-lg text-base">Welcome to Donaty, a beacon of hope and a catalyst for positive change. At Donaty, we believe in the power of collective action, compassion, and unwavering dedication to creating a brighter future for all. Our journey began with a simple yet profound vision: to make a tangible difference in the lives of those in need.</p>
                <img className="my-4 w-full" src='https://i.ibb.co/5x252Qp/Somalia.jpg' alt="" />
                <h1 className="md:md:text-4xl text-2xl font-semibold my-5">Making Impact Beyond Borders</h1>
                <p className="md:text-lg text-base">Our mission is deeply rooted in compassion, driven by the pursuit of equity, and committed to addressing pressing societal challenges. Through our unwavering commitment and collaborative efforts, we strive to extend a helping hand to communities, families, and individuals, transcending geographical boundaries.</p>
                <img className="my-4 w-full" src='https://i.ibb.co/rp02hWD/syria.jpg' alt="" />
                <h1 className="md:text-4xl text-2xl font-semibold my-5">Compassion, Integrity, and Innovation</h1>
                <p className="md:text-lg text-base">At Donaty, our core values shape our every action. We stand by the pillars of compassion, integrity, and innovation, guiding us as we navigate the complex landscape of philanthropy and social responsibility.
                    <ul>
                        <li className="list-item">Compassion is the heart of our existence. It fuels our desire to alleviate suffering and drive positive change. Every action we take is embedded with empathy and the understanding that every contribution, no matter how small, holds the potential to transform lives.</li>
                        <li>Integrity defines our commitment to transparency, accountability, and ethical practices. We ensure that every donation, every initiative, and every partnership is conducted with the highest standards of accountability, earning the trust of our donors, partners, and beneficiaries.
                        </li>
                        <li>Innovation fuels our quest for creative solutions. We believe in exploring new avenues, adopting innovative strategies, and leveraging technology to amplify our impact and tackle global challenges efficiently.</li>
                    </ul>
                </p>
                <img className="my-4 w-full" src='https://i.ibb.co/sjQ5F2n/myanmar.jpg' alt="" />
                <h1 className="md:text-4xl text-2xl font-semibold my-5">Fostering Sustainable Change</h1>
                <p className="md:text-lg text-base">Over the years, Donaty has made significant strides in addressing critical issues such as education, healthcare, poverty alleviation, environmental sustainability, and more. Our impactful programs and initiatives have touched countless lives, fostering sustainable change and leaving a lasting legacy of empowerment and progress.</p>
                <img className="my-4 w-full" src='https://i.ibb.co/wycfY8j/venezuelan.jpg' alt="" />
                <h1 className="md:text-4xl text-2xl font-semibold my-5">Join Us on the Journey</h1>
                <p className="md:text-lg text-base">Join us as we continue our journey towards a more equitable, compassionate, and inclusive world. Whether it is through volunteering, donations, or spreading awareness, your support makes a meaningful difference. Together, lets build a future where everyone has the opportunity to thrive.
                   <br /><br /> Thank you for being a part of the Donaty family—a force for good and a beacon of hope.</p>
            </div>

        </div>
    );
};

export default AboutUs;