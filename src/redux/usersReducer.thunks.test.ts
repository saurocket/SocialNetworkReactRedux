import {follow} from "./usersReducer";
import {usersAPI} from "../API/users-api";
import {APIResponseType, ResultCodesEnum} from "../API/api";

jest.mock("../API/users-api");
const userAPIMock = usersAPI;

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}

}

// @ts-ignore
userAPIMock.followUser.mockReturnValue(Promise.resolve(result))


test("FollowTest", async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn();

    // @ts-ignore
   await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(3);
});