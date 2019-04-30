import {AppointedSlot} from "../models/AppointedSlot";

export default class SlotRepository {
    public createAppointedSlot = (data) => {
        return AppointedSlot.bulkCreate(data);
    }
}