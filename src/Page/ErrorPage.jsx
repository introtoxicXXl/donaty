import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div className="h-screen flex justify-center items-center text-5xl text-red-700 font-bold">{error.status} This page does not exist!</div>;
        }

        if (error.status === 401) {
            return <div className="h-screen flex justify-center items-center text-5xl text-red-700 font-bold">{error.status} You are not authorized to see this</div>;
        }

        if (error.status === 503) {
            return <div className="h-screen flex justify-center items-center text-5xl text-red-700 font-bold">{error.status} Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div className="h-screen flex justify-center items-center text-5xl text-red-700 font-bold">{error.status} 🫖</div>;
        }
    }

    return (
        <div className="h-screen flex justify-center items-center text-5xl text-red-700 font-bold">
            {error.status} {error.message}
        </div>
    );
};

export default ErrorPage;