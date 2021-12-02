import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { defineUriByEnviroment } from "./config";
import axios from "axios";

export const UserContext = createContext();
export const LoadProductContext = createContext();
export const App = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts();
        const isUserLoggedIn = localStorage.getItem("ecommerceToken");
        const userDataEcommerce = localStorage.getItem("userDataEcommerce");
        if (isUserLoggedIn && userDataEcommerce) {
            const dataParsed = JSON.parse(userDataEcommerce);
            setUser(dataParsed);
        }
    }, []);

    const getProducts = async () => {
        try {
            const { data } = await axios.get(
                `${defineUriByEnviroment()}/api/products`
            );
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

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
            <LoadProductContext.Provider value={{ products, getProducts }}>
                <Navbar logOff={logOff} logIn={logIn} />
                <Main />
            </LoadProductContext.Provider>
        </UserContext.Provider>
    );
};
