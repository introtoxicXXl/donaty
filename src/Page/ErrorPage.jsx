import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import errorImg from '../assets/error.png';

const ErrorPage = () => {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div className="h-[70vh] flex items-center w-2/5 mx-auto md:text-3xl text-lg text-red-700 font-bold flex-col">
                <img className="w-full" src={errorImg} alt="" />
                <p className="text-center"> {error.status} This page does not exist! </p>
            </div>
        }

        if (error.status === 401) {
            return <div className="h-[70vh] flex items-center w-2/5 mx-auto md:text-3xl text-lg text-red-700 font-bold flex-col">
                <img className="w-full" src={errorImg} alt="" />
                <p className="text-center"> {error.status} You are not authorized to see this</p>
            </div>
        }

        if (error.status === 503) {
            return <div className="h-[70vh] flex items-center w-2/5 mx-auto md:text-3xl text-lg text-red-700 font-bold flex-col">
                <img className="w-full" src={errorImg} alt="" />
                <p className="text-center"> {error.status} Looks like our API is down</p>
            </div>
        }

        if (error.status === 418) {
            return <div className="h-[70vh] flex items-center w-2/5 mx-auto md:text-3xl text-lg text-red-700 font-bold flex-col">
                <img className="w-full" src={errorImg} alt="" />
                <p className="text-center">{error.status} 🫖</p>
            </div>
        }
    }

    return (<div className="h-[70vh] flex items-center w-2/5 mx-auto md:text-3xl text-lg text-red-700 font-bold flex-col">
        <img className="w-full" src={errorImg} alt="" />
        <p className="text-center"> {error.status} {error.message}</p>
    </div>
    );
};

export default ErrorPage;