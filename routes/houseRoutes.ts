import express, { Request, Response, NextFunction } from 'express';
import { HouseHandler } from '../handler/houseHandler';
import { FakeService } from '../db/fake/fakeService';
import { HouseController } from '../controller/houseController';
import { PostgresService } from '../db/postgres/postgresService';

const router = express.Router();

// Create the service and controller
const fakeService = new FakeService();
const pS = new PostgresService("");
const houseController = new HouseController(pS);

// Create the handler instance
const houseHandler = new HouseHandler(houseController);

// Set up routes with bound handler methods
router.get('/', houseHandler.getHouses.bind(houseHandler));

export default router;