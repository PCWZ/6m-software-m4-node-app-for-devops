const targetFn = require("./controller");

describe("the print function", ()=>{

    // standard best practice
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello I'm Parry! successfuly depluy my app!'", ()=>{
        const mockReq = {};
        const mockRes = {
            send:jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello I'm Parry! successfuly depluy my app!"); // If you change this value, the test will fail.
    })
})