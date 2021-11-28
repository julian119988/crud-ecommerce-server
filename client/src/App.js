import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

export const UserContext = createContext();
export const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem("ecommerceToken");
        const userDataEcommerce = localStorage.getItem("userDataEcommerce");
        if (isUserLoggedIn && userDataEcommerce) {
            const dataParsed = JSON.parse(userDataEcommerce);
            setUser(dataParsed);
        }
    }, []);

    const logOff = () => {
        localStorage.removeItem("ecommerceToken");
        localStorage.removeItem("userDataEcommerce");
        setUser(null);
    };
    const logIn = (userData) => {
        setUser(userData);
    };
    return (
        <UserContext.Provider value={user}>
            <Navbar logOff={logOff} logIn={logIn} />
            <Main />
        </UserContext.Provider>
    );
};
