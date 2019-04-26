import {Slot} from "../models/Slot";

export default class SlotRepository {
    public createSlot = (newSlot: any) => {
        console.log("within repository creating", newSlot);
        return newSlot.save();
    }
}