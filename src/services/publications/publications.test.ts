import { insertPublication } from "../../dataAccess/publications/insertPublication";
import createPublication from './createPublication';
import likePublication from './likePublication';
import { insertLike } from "../../dataAccess/publications/insertLike";
import { updatePublication } from "../../dataAccess/publications/updatePublication";
import putPublication from './putPublication';
import { deleteLike } from "../../dataAccess/publications/deleteLike";
import removeLike from './removeLike';
import { deletePublication } from "../../dataAccess/publications/deletePublication";
import removePublication from "./removePublication"


jest.mock('../../dataAccess/publications/insertPublication', () => ({
    insertPublication: jest.fn()
}));

jest.mock('../../dataAccess/publications/insertLike', () => ({
    insertLike: jest.fn()
}));

jest.mock('../../dataAccess/publications/updatePublication', () => ({
    updatePublication: jest.fn()
}));


jest.mock('../../dataAccess/publications/deleteLike', () => ({
    deleteLike: jest.fn()
}));


jest.mock('../../dataAccess/publications/deletePublication', () => ({
    deletePublication: jest.fn()
}));



describe("Publications test suit", () => {
    it("should exute the insertPublication fucntion", async () => {
        await createPublication({
            message: "message",
            author: {
                user_id: 1,
                surname: "surname",
                name: "name",
                username: "username",
                role: "admin"
            },
            location: "ve",
            status: "published"
        });
        expect(insertPublication).toBeCalledWith({
            message: "message",
            author: {
                user_id: 1,
                surname: "surname",
                name: "name",
                username: "username",
                role: "admin"
            },
            location: "ve",
            status: "published"
        })
    })


    it("should exute the insertLike fucntion", async () => {
        await likePublication({ userId: "1", postId: "1" });
        expect(insertLike).toBeCalledWith({ userId: "1", postId: "1" })
    })


    it("should exute the updatePublication fucntion", async () => {
        await putPublication({ post_id: "1", message: "message", status: "deleted", author: "1" }, true);
        expect(updatePublication).toBeCalledWith({ post_id: "1", message: "message", status: "deleted", author: "1" }, true)
    })

    it("should exute the deleteLike fucntion", async () => {
        await removeLike({ userId: "1", postId: "1" });
        expect(deleteLike).toBeCalledWith({ userId: "1", postId: "1" })
    })


    it("should exute the deletePublication fucntion", async () => {
        await removePublication({ author: "1", post_id: "1" });
        expect(deletePublication).toBeCalledWith({ author: "1", post_id: "1" })
    })

})