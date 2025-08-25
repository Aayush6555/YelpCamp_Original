class ExpressError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statuscode = this.statuscode;
    }
}

module.exports = ExpressError;