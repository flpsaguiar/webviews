const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const path = require('path');
const glob = require('glob');
const rootPath = path.normalize(`${__dirname}/..`);
const express = require('express');

class Setup {

    static load(app) {
        Setup.loadBodyParser(app);
        Setup.loadControllers(app);
        Setup.serveStatic(app);
    }

    static serveStatic(app) {
        app.use('/', express.static(path.join(__dirname, '../public/dist')));
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