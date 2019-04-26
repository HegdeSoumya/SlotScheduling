import wiring from "../wiring";

export class Routes {
    public routes(app: any): void {
        app.post('/api/v1/profiles/:profileId', wiring.slotController().createSlots);
    }
}

export default Routes;