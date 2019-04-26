import SlotController from "../app/controllers/SlotController";
import SlotRepository from "../app/repositories/SlotRepository";
import SlotService from "../app/services/SlotService";

class Wiring {
    public slotController() {
        return new SlotController(this.slotService());
    }
    public slotService() {
        return new SlotService(this.slotRepository());
    }
    public slotRepository() {
        return new SlotRepository();
    }
}

export default new Wiring();