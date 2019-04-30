import AppConstant from "../constants/AppConstant";
import ServiceError from "../errors/ServiceError";
import AppointedSlotRepository from "../repositories/AppointedSlotRepository";
import SlotRepository from "../repositories/SlotRepository";

export default class SlotService {
    private slotRepository: SlotRepository;
    private appointedSlotRepository: AppointedSlotRepository;

    public constructor( slotRepository: SlotRepository, appointedSlotRepository: AppointedSlotRepository) {
        this.slotRepository = slotRepository;
        this.appointedSlotRepository = appointedSlotRepository;
    }

    public createAppointedSlots = (startTime, endTime, slotSize, profileId, slotId) => {
        const slots = [];
        console.log('entered create appointed slots');
        while (startTime < endTime) {
            console.log('in while');
            const newEndTime = startTime.add(slotSize, 'm');
            slots.push({startTime, newEndTime, profileId, slotId});
            startTime = newEndTime;
            console.log('sdfghjklkjhgfds', slots);
        }
        return slots;
    }

    public createSlots = async (slotRequest) => {
        try {
            const startTime = slotRequest.startTime;
            const endTime = slotRequest.endTime;
            const slotSize = slotRequest.slotSize;
            const profileId = slotRequest.profileId;
            const response = await this.slotRepository.createSlot(slotRequest);
            const slotId = response.id;
            let slots = [];
            slots = this.createAppointedSlots(startTime, endTime, slotSize, profileId, slotId);
            await this.appointedSlotRepository.createAppointedSlot(slots);
        } catch (error) {
            throw new ServiceError(AppConstant.ERROR_CODES.ERR_INTERNAL_SERVER_ERROR,
                AppConstant.ERROR_MESSAGES.ERR_INTERNAL_SERVER_ERROR);
        }
    }

    public getAllSlots = async () => {
        try {
            return await this.slotRepository.getAllSlots();
        } catch (error) {
            throw new ServiceError(AppConstant.ERROR_CODES.ERR_NOT_FOUND,
                AppConstant.ERROR_MESSAGES.ERR_NOT_FOUND);
        }
    }

    public getSlot = async (id: number) => {
        try {
            return await this.slotRepository.getSlot(id);
        } catch (error) {
            throw new ServiceError(AppConstant.ERROR_CODES.ERR_NOT_FOUND,
                AppConstant.ERROR_MESSAGES.ERR_NOT_FOUND);
        }
    }
}