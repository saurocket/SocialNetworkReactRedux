
const UPDATE_NEW_HEADER_NEWS = 'UPDATE-NEW-HEADER-NEWS';
const UPDATE_NEW_BODY_NEWS = 'UPDATE-NEW-BODY-NEWS';
const ADD_NEWS = 'ADD_NEWS';

let initialState = {
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
}

 const newsReducer = (state=initialState, action) => {

     switch (action.type) {
         case UPDATE_NEW_HEADER_NEWS: {
             let stateCopy = {...state};
             stateCopy.newMessage = {...stateCopy.newMessage};
             stateCopy.newMessage.headerNews = action.text;
             return stateCopy;
         }
         case UPDATE_NEW_BODY_NEWS: {
             let stateCopy = {...state};
             stateCopy.newMessage = {...stateCopy.newMessage};

             stateCopy.newMessage.bodyNews = action.text;
             return stateCopy;
         }
         case ADD_NEWS: {
             let newNews = {
                 id: 4,
                 header: state.newMessage.headerNews,
                 newsBody: state.newMessage.bodyNews
             }
             let stateCopy = {...state};
             stateCopy.newMessage = {...stateCopy.newMessage};
             stateCopy.news = [...stateCopy.news, newNews];
             stateCopy.newMessage.headerNews= '';
             stateCopy.newMessage.bodyNews = '';
             return stateCopy;
         }
         default: return state;
     }
}
export const changeNewsHeader = (text) => {
    return (
        {
            type: UPDATE_NEW_HEADER_NEWS,
            text: text
        }
    )
}
export const changeNewsBody= (text) => {
    return (
        {
            type: UPDATE_NEW_BODY_NEWS,
            text: text
        }

    )
}
export const addNewsPost = () => {
    return (
        {
            type: ADD_NEWS
        }
    )


}




export default newsReducer;