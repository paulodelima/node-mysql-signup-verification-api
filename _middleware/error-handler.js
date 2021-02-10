module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log('--------------------------------------------------------------------------------------------------------')
    switch (true) {
        case typeof err === 'string':
            console.log('Check erro string');
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err });

        case err.name === 'UnauthorizedError':
            console.log('Check erro Unauthorized');
            // jwt authentication error
            return res.status(401).json({ message: 'Unauthorized' });
        default:
            console.log('Check erro default');
            return res.status(500).json({ message: err.message });
    }
}