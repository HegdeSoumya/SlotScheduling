import {Request, Response} from "express";
import moment from "moment";
import AppConstants from "../constants/AppConstant";
import ServiceError from "../errors/ServiceError";
import {Slot} from "../models/Slot";
import SlotService from "../services/SlotService";
import BaseController from "./BaseController";

export default class SlotController extends BaseController {
    private slotService: SlotService;

    public constructor(slotService: SlotService) {
        super();
        this.slotService = slotService;
    }

    public createSlots = async (req: Request, res: Response) => {
        try {
            const newSlot = new Slot ({
                profileId: req.params.profileId,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                slotSize: req.body.slotSize,
            });
            if (newSlot.endTime <= newSlot.startTime || (moment(newSlot.startTime) <= moment.utc())) {
                return this.appResponse.badRequest(
                    res,
                    AppConstants.ERROR_CODES.ERR_INVALID_TIMESTAMP,
                    AppConstants.ERROR_MESSAGES.ERR_INVALID_TIMESTAMP,
                    'Description',
                );
            }
            if (newSlot.slotSize % 30 !== 0) {
                return this.appResponse.badRequest(
                    res,
                    AppConstants.ERROR_CODES.ERR_INVALID_SLOTSIZE,
                    AppConstants.ERROR_MESSAGES.ERR_INVALID_SLOTSIZE,
                    'Description',
                );
            }
            const response = await this.slotService.createSlots(newSlot);
            return await this.appResponse.success(res, {response});
        } catch (error) {
            if (error instanceof ServiceError) {
                return this.appResponse.error(
                    res,
                    AppConstants.ERROR_CODES.ERR_INTERNAL_SERVER_ERROR,
                    AppConstants.ERROR_MESSAGES.ERR_INTERNAL_SERVER_ERROR,
                    'Description',
                );
            } else {
                throw error;
            }
        }
    }
    public getAllSlots = async (req: Request, res: Response) => {
         try {
            const slots = await this.slotService.getAllSlots();
            return this.appResponse.success(res, {slots});
         } catch (error) {
             if (error instanceof ServiceError) {
                 return this.appResponse.notFound(
                     res,
                     AppConstants.ERROR_CODES.ERR_NOT_FOUND,
                     AppConstants.ERROR_MESSAGES.ERR_NOT_FOUND,
                     'Description',
                 );
             } else {
                 throw error;
             }
         }
    }

    public getSlots = async (req: Request, res: Response) => {
        try {
            const slot = await this.slotService.getSlot(req.params.slotId);
            return this.appResponse.success(res, {slot});
        } catch (error) {
            if (error instanceof ServiceError) {
                return this.appResponse.notFound(
                    res,
                    AppConstants.ERROR_CODES.ERR_NOT_FOUND,
                    AppConstants.ERROR_MESSAGES.ERR_NOT_FOUND,
                    'Description',
                );
            } else {
                throw error;
            }
        }
    }
}