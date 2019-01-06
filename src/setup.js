const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const path = require('path');
const glob = require('glob');
const rootPath = path.normalize(`${__dirname}/..`);

class Setup {

    static load(app) {
        Setup.loadBodyParser(app);
        Setup.loadControllers(app);
    }

    static loadBodyParser(app) {
        app.use(bodyParser.json());
        app.use(compress());
        app.use(bodyParser.urlencoded({
            extended: true,
        }));
    }

    static loadControllers(app) {
        const controllers = glob.sync(`${rootPath}/src/controllers/*.js`);
        controllers.forEach((controllerPath) => {
            const ControllerFile = require(controllerPath);
            new ControllerFile.default(app);
        });
    }
}

module.exports = Setup;