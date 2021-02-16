import profileReducer from "./profileReducer";
import newsReducer from "./newReducer";
import messagesReducer from "./messagesReducer";
import navReducer from "./navReducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
//news
const UPDATE_NEW_HEADER_NEWS = 'UPDATE-NEW-HEADER-NEWS';
const UPDATE_NEW_BODY_NEWS = 'UPDATE-NEW-BODY-NEWS';
const ADD_NEWS = 'ADD_NEWS';




let store = {
    _state: {
        messegesPage: {
            newMessage: 'Hello World',
            messeges: [
                {id: 1, message: 'Hi All'},
                {id: 2, message: 'My name'},
                {id: 3, message: 'Feeee'},
                {id: 4, message: 'Faaaa'},
                {id: 5, message: 'Good game'},
            ],
            dialogs: [
                {id: 1, name: 'Maria'},
                {id: 2, name: 'Yauheno'},
                {id: 3, name: 'Goga'},
                {id: 4, name: 'Petrt'},
            ],
        },
        profilePage: {
            newPostText: 'it-kamasutra.com',
            posts: [
                {id: 1, post: "Hi, how are you", like: 2},
                {id: 2, post: "Buy Buy beautiful", like: 3},
                {id: 3, post: "I'm be fine", like: 3},
            ]
        },
        navPage: {
            friendsBar: [
                {id: 1, name: 'Yauheni', lastName: 'Luzakou', nickName: 'saurocket'},
                {id: 2, name: 'Maria', lastName: 'Motsar', nickName: 'marri'},
                {id: 3, name: 'Ruslan', lastName: 'Rabsu', nickName: 'riaba'}
            ]
        },
        newsPage: {
            newMessage: {
                headerNews: 'ExampleHeader',
                bodyNews: 'ExampleBodyNews'
            },
            news: [
                {   id: 1,
                    header: 'News for december',
                    newsBody: 'В Минске и других городах люди с утра выстраиваются в цепи солидарности. Особенно много их появилось около 15.00. В нашем традиционном онлайне мы рассказываем о главных событиях в стране, которые происходят 23 января.\n' +
                        'Читать полностью:'
                },
                {   id: 2,
                    header: 'Febreary',
                    newsBody: 'В Москве Пушкинскую площадь огородили металлическими заграждениями, стянули подразделения второго оперативного полка полиции, предназначенного для пресечения массовых беспорядков, а также бойцов ОМОНа, сообщает ТАСС. На площади дежурили дружинники, рядом — автозаки. Выйти из метро можно только через один выход\n' +
                        'Читать полностью:'
                },
                {   id: 3,
                    header: 'Julay',
                    newsBody: 'При этом сами акции милиция называет кратковременными, «участие в которых принимает немногочисленное количество человек'
                },


            ]
        },

    },
    _callSubscribere(){
        console.log('state was changed');
    },
    getState(){

      return this._state;
    },
    subscribe(observer){
        this._callSubscribere = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messegesPage = messagesReducer(this._state.messegesPage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._state.navPage = navReducer(this._state.navPage,action);

        this._callSubscribere(this._state);


    }
}

window.store = store;
export default store;




