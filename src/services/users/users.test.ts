import { selectUserById } from "../../dataAccess/user/selectUserById";
import selectUserByUsername from "../../dataAccess/user/selectUserByUsername";
import { insertUser } from "../../dataAccess/user/insertUser";
import registerUser from "./registerUser";
import getUser from "./getUser"
import login from "./login"


jest.mock('../../dataAccess/user/selectUserById', () => ({
    selectUserById: jest.fn()
}));

jest.mock('../../dataAccess/user/insertUser', () => ({
    insertUser: jest.fn()
}));

jest.mock('../../dataAccess/user/selectUserByUsername', () => jest.fn());

describe("User test suit", () => {
    it("should exute the selectUserById fucntion", async () => {
        await getUser({ userId: "1" })
        expect(selectUserById).toBeCalledWith({ userId: "1" })
    })


    it("should execute selectUserByUsername function", async () => {
        (selectUserByUsername as jest.Mock).mockResolvedValue({ username: "fulano" })
        await login({ username: "fulano" })
        expect(selectUserByUsername).toBeCalledWith({ username: "fulano" })
    })


    it("should execute selectUserByUsername function and throw error", async () => {
        (selectUserByUsername as jest.Mock).mockResolvedValue(null)
        try {
            await login({ username: "fulano" })
        } catch (error : any) {
            expect(error.message).toBe("Invalid username")
        }
    })


    it("should exute the insertUser fucntion", async () => {
        await registerUser({ username: "username", name: "name", surname: "surname", role: "admin"})
        expect(insertUser).toBeCalledWith({ username: "username", name: "name", surname: "surname", role: "admin"})
    })
})