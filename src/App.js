import './App.css';
import 'normalize.css';

import {Route, withRouter} from "react-router-dom";

import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavPageContainer from "./components/nav/NavPageContainer";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";
import DialogPageContainer from "./components/DIalogs/DialogPageContainer";
import NewsPageContainer from "./components/News/NewsPageContainer";
import UserPageContainer from "./components/Users/UsersPageContainer";
import HeaderContainer from "./components/header/HeaderContainer";

import LoginReduxForm from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";

import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Spinner from "./components/common/spinner/Spinner";

class App extends Component{
    componentDidMount() {
        this.props.initializeApp()
    }
    render(){
       if( !this.props.initialized){
           return <Spinner/>
       }else {
           return (
               <div className="container app-wrapper">
                   <div className="container row">
                       <HeaderContainer/>
                   </div>
                   <div className="container row">
                       <div className="col-md-3">
                           <NavPageContainer/>
                       </div>
                       <div className="col-md-9 wrapper-content">
                           <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                           <Route path='/dialogs' render={() => <DialogPageContainer/>}/>
                           <Route path='/news' render={() => <NewsPageContainer/>}/>
                           <Route path='/music' component={Music}/>
                           <Route path='/settings' component={Settings}/>
                           <Route path='/users' render={() => <UserPageContainer/>}/>
                           <Route path='/login' render={() => <LoginReduxForm/>}/>
                       </div>
                   </div>
               </div>
           )
       }


    }
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)
(App)
