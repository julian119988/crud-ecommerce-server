export default {
    smallGrid: {
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fit, minmax(min-content, 150px))",
        justifyContent: "center",
    },
    bigGrid: {
        display: "grid",
        gridGap: "15px",
        gridTemplateColumns: "repeat(auto-fit, minmax(min-content, 250px))",
        justifyContent: "center",
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
};
