
type FriendsBarType = {
    id: number
    name: string
    lastName: string
    nickName: string
}

let initialState = {
    friendsBar: [
        {id: 1, name: 'Yauheni', lastName: 'Luzakou', nickName: 'saurocket'},
        {id: 2, name: 'Maria', lastName: 'Motsar', nickName: 'marri'},
        {id: 3, name: 'Ruslan', lastName: 'Rabsu', nickName: 'Riababa'}
    ] as Array<FriendsBarType>
}
export type InitialStateType = typeof initialState
const navReducer = (state = initialState, action:any): InitialStateType =>

{
    return state;
}
export default navReducer;