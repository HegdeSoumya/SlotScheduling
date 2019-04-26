import wiring from "../wiring";

export class Routes {
    public routes(app: any): void {
        app.post('/api/v1/profiles/:profileId', wiring.slotController().createSlots);
        app.get('/api/v1/slots', wiring.slotController().getAllSlots);
        app.get('/api/v1/slots/:slotId', wiring.slotController().getSlots);
    }
}

export default Routes;