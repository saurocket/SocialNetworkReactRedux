import {connect} from "react-redux";
import News from "./News";
import {addNewsPost, changeNewsBody, changeNewsHeader} from "../../redux/newReducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state:AppStateType) => {
    return {
        newsPage: state.newsPage
    }
}

// @ts-ignore
const NewsPageContainer = connect(mapStateToProps, {addNewsPost, changeNewsBody, changeNewsHeader})(News);


export default NewsPageContainer;

