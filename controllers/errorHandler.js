const errorHandler = (statusCode, message, res) => {
    res.status(statusCode).send({ message: message });
};

module.exports = errorHandler;
