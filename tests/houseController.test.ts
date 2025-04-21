import { HouseController } from "../controller/houseController";

describe('House Controller', () => {

    let houseController: HouseController;

    beforeEach(() => {
        const mockDBService = {
            getHouses: jest.fn(),
            getHouseById: jest.fn()
        }
        houseController = new HouseController(mockDBService);
    })

    test('should return error when the two numbers are positive', async () => {
        
        const num1 = 10
        const num2 = 10

        let x = 10

        const result = houseController.sum(num1, num2)
        //then
        expect(result).toBe(20)
    })

    test('should throw error when one of the numbers is negative', async () => {
        const num1 = 10
        const num2 = -10

        const result = houseController.sum(num1, num2);

        expect(() => {houseController.sum(num1,num2)}).rejects.toThrow('numbers cant be negative');

    })

})