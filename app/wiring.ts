import SlotController from "../app/controllers/SlotController";
import AppointedSlotRepository from "../app/repositories/AppointedSlotRepository";
import SlotRepository from "../app/repositories/SlotRepository";
import SlotService from "../app/services/SlotService";

class Wiring {
    public slotController() {
        return new SlotController(this.slotService());
    }
    public slotService() {
        return new SlotService(this.slotRepository(), this.appointedSlotRepository());
    }
    public slotRepository() {
        return new SlotRepository();
    }
    public appointedSlotRepository() {
        return new AppointedSlotRepository();
    }
}

export default new Wiring();