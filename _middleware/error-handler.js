module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.info('err INI ----------------------------')
    console.info(typeof err);
    console.info('----------------------------')
    console.info(err.name);
    console.info('----------------------------')
    console.info(err.message);
    console.info('----------------------------')
    console.info(err);
    console.info('err FIM ############################')
    switch (true) {
        case err.name === 'UnauthorizedError':
            // jwt authentication error
            return res.status(401).json({ message: `Unauthorized - ${err.message}` });
        case typeof err === 'object':
            // custom application error
            const is404 = err.message.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err.message });

        default:
            return res.status(500).json({ message: err.message });
    }
}