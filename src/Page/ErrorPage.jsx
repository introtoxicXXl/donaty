import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error.message)
    return (
        <div>
            <h1>{error.message}</h1>
            <h1>{error.statusText}</h1>

        </div>
    );
};

export default ErrorPage;