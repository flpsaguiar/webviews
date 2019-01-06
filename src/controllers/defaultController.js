class DefaultController {
    constructor(app) {
        app.get('/teste', DefaultController.test);
    }

    static async test(req, res, next) {
        try {
            return res.json({ result: 'OK' });
        } catch (error) {
            return next(error);
        }
    }
}

exports.default = DefaultController;