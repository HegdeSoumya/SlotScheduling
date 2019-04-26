import {Slot} from "../models/Slot";

export default class SlotRepository {
    public createSlot = (newSlot: any) => {
        return newSlot.save();
    }
    public getAllSlots = () => {
        return Slot.findAll();
    }

    public getSlot = (id: number) => {
        return Slot.findOne({
            where: {
                id,
            },
        });
    }
}