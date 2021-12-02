export const defineUriByEnviroment = () => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") return "18.223.2.137:8080";
    return "http://localhost:8080";
};
