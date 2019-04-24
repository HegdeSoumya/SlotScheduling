import * as bodyParser from "body-parser";
import express from "express";
import sequelize from "sequelize";

export class App {

    public app: express.Application = express();

    constructor() {
      this.app = express();
      this.config();
      this.postgresSetup();
    }
    private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      // this.app.use('/pets', routes);
    }
    private postgresSetup(): void {
      Logger.info('Connecting to postgres');

      sequelize
          .authenticate()
          .then(() => {
              Logger.info('Connected to postgres');
              this.app.emit('Dbconnected');
          })
          .catch((err) => {
              Logger.error('Unable to connect to postgres', err);
          });
    }
}
export default new App().app;