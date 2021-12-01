export const defineUriByEnviroment = () => {
    if (process.env.NODE_ENV === "production")
        return "https://crud-ecommerce-server.vercel.app:8080/";
    return "http://localhost:8080";
};
