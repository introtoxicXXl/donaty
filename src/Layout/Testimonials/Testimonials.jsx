import Span from "../../Utility/Span";


const Testimonials = () => {
    return (
        <div className="flex justify-between mt-14 md:flex-row-reverse flex-col container mx-auto overflow-hidden">
            <div className="flex justify-center items-center h-screen mx-auto" data-aos="fade-left">
                <img className="h-3/4 grayscale w-full rounded-t-3xl" src="https://i.ibb.co/GWqxMB9/testimonial.jpg" alt="" />
            </div>
            <div className="basis-1/2 flex justify-center items-center">
                <div className="lg:space-y-8 md:space-y-5 space-y-3" data-aos="fade-right">
                    <Span text='Testimonial'></Span>
                    <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold">What People Say about <br /> <span className="text-myColor">Our Organization</span></h1>
                    <blockquote className="lg:text-xl md:text-lg text-base">
                        <q> Donaty is a dedicated and impactful charity organization committed to making a positive difference in the lives of those in need. It is recognized for its unwavering dedication to various causes, aiming to uplift communities, support essential services, and create sustainable change. Donaty approach is rooted in compassion, aiming to address societal challenges ranging from healthcare, education, poverty alleviation, environmental conservation.
                        </q>
                    </blockquote>
                    <div className="">
                        <h4 className="text-myColor text-2xl font-medium">Kay Henderson</h4>
                        <p className="text-sm">Businessman - Entrepreneur</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Testimonials;