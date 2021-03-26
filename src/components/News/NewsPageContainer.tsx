import {connect} from "react-redux";
import News from "./News";
import {actions} from "../../redux/newReducer";
import {AppStateType} from "../../redux/redux-store";


const {addNewsPost, changeNewsBody, changeNewsHeader} = actions;

const mapStateToProps = (state:AppStateType) => {
    return {
        newsPage: state.newsPage
    }
}

// @ts-ignore
const NewsPageContainer = connect(mapStateToProps, {addNewsPost, changeNewsBody, changeNewsHeader})(News);


export default NewsPageContainer;

