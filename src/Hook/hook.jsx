import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => useContext(AuthContext);
export default useAuth;