import AppConstant from "../constants/AppConstant";
import ServiceError from "../errors/ServiceError";
import SlotRepository from "../repositories/SlotRepository";

export default class SlotService {
    private slotRepository: SlotRepository;

    public constructor( slotRepository: SlotRepository) {
        this.slotRepository = slotRepository;
    }

    public createSlots = async (slotRequest) => {
        try {
            return await this.slotRepository.createSlot(slotRequest);
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