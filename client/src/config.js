export const defineUriByEnviroment = () => {
    if (process.env.NODE_ENV === "production")
        return "http://18.223.2.137:8080";
    return "http://localhost:8080";
};
