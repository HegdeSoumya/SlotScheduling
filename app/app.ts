import * as bodyParser from "body-parser";
import express from "express";
import i18n from "i18n";
import sequelize from "../app/config/sequelize";
import Routes from "../app/routes/routes";

export class App {

    public app: express.Application = express();
    public routes: Routes = new Routes();
    constructor() {
      this.app = express();
      this.config();
      this.postgresSetup();
      this.routes.routes(this.app);
    }
    private config(): void {
        this.app.use(bodyParser.json());
        i18n.configure({
            locales: ['en', 'es'],
            directory: __dirname + '/locales',
            defaultLocale: 'en',
            register: global,
        });
        this.app.use(i18n.init);
    }
    private postgresSetup(): void {
      sequelize
          .authenticate()
          .then(() => {
              console.log('Connected to postgres');
              this.app.emit('Dbconnected');
          })
          .catch((err) => {
              console.log('Unable to connect to postgres', err);
          });
    }
}
export default new App().app;