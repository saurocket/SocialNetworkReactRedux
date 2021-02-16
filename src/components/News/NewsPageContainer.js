import {connect} from "react-redux";
import News from "./News";
import {addNewsPost, changeNewsBody, changeNewsHeader} from "../../redux/newReducer";

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}







const NewsPageContainer = connect(mapStateToProps, {addNewsPost, changeNewsBody, changeNewsHeader})(News);


export default NewsPageContainer;

