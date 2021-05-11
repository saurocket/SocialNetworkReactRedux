import {UserType} from "../types/types";
import usersReducer, {actions, InitialStateType} from "./usersReducer";
let state:InitialStateType;
beforeEach(() => {
    state =  {
        users: [{id:0, name:'Yauhen0', followed:false, photos:{large:null, small: null}, status: 'status 0'},
            {id:1, name:'Yauhe1', followed:false, photos:{large:null, small: null}, status: 'status 1'},
            {id:2, name:'Yauhe2', followed:true, photos:{large:null, small: null}, status: 'status 2'},
            {id:3, name:'Yauhe3', followed:true, photos:{large:null, small: null}, status: 'status 3'},
        ],
            pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        follwingInProgress: [],
    }
})
test("followSuccess",() =>{
   const newState = usersReducer(state,actions.followSuccess(1) )
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});
test("unFollowSuccess", () => {
   const  newState = usersReducer(state,actions.unFollowSuccess(3));
   expect(newState.users[2].followed).toBeTruthy();
   expect(newState.users[3].followed).toBeFalsy();
});