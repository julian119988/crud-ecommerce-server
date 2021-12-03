import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { getProducts } from "./helper/api";

export const UserContext = createContext();
export const LoadProductContext = createContext();
export const App = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        refreshProducts();
        const isUserLoggedIn = localStorage.getItem("ecommerceToken");
        const userDataEcommerce = localStorage.getItem("userDataEcommerce");
        if (isUserLoggedIn && userDataEcommerce) {
            const dataParsed = JSON.parse(userDataEcommerce);
            setUser(dataParsed);
        }
    }, []);

    const refreshProducts = async () => {
        setProducts([]);
        const data = await getProducts();
        setProducts(data);
    };

    const handleLogOff = () => {
        localStorage.removeItem("ecommerceToken");
        localStorage.removeItem("userDataEcommerce");
        setUser(null);
    };
    const handleLogIn = (userData) => {
        setUser(userData);
    };
    return (
        <UserContext.Provider value={user}>
            <LoadProductContext.Provider value={{ products, refreshProducts }}>
                <Navbar handleLogOff={handleLogOff} handleLogIn={handleLogIn} />
                <Main />
            </LoadProductContext.Provider>
        </UserContext.Provider>
    );
};
