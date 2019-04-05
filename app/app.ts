import * as bodyParser from "body-parser";
import express from "express";
export class App {

    public app: express.Application = express();

    constructor() {
      this.app = express();
      this.config();
    }
    private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      // this.app.use('/pets', routes);
    }
}
export default new App().app;