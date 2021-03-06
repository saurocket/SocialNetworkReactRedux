import './App.css';
import React, {ComponentType, lazy, Suspense} from 'react';
import 'normalize.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavPageContainer from "./components/nav/NavPageContainer";
import {UsersPage} from "./components/Users/UsersPageContainer"
import NewsPageContainer from "./components/News/NewsPageContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Spinner from "./components/common/spinner/Spinner";
import store, {AppStateType} from "./redux/redux-store";



const DialogPageContainer = React.lazy(() => import("./components/DIalogs/DialogPageContainer"));
const ProfilePageContainer = React.lazy(() => import("./components/Profile/ProfilePageContainer"));
const renderLoader = () => <p>Loading</p>;

type PropsType = {
    initialized:AppStateType
    initializeApp: ()=>void
}

class App extends Component<PropsType>{
    catchAllErrors = (event:PromiseRejectionEvent) => {
        alert("some error");
        console.log(event);

    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllErrors);
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllErrors);
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
                            <Route exact path='/'
                                   render={()=> <Redirect to={'profile'}/>}/>
                           <Suspense fallback={renderLoader()}>
                               <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                               <Route path='/dialogs' render={() => <DialogPageContainer/>}/>
                           </Suspense>
                           <Route path='/users' render={() => <UsersPage pageTitle={"Samurai"}/>}/>
                           <Route path='/news' render={() => <NewsPageContainer/>}/>
                           <Route path='/music' component={Music}/>
                           <Route path='/settings' component={Settings}/>
                           <Route path='/login' render={() => <Login/>}/>
                           <Route path='*' render={()=><div>404 NOT FOUND</div> }/>
                       </div>
                   </div>
               </div>
           )
       }
    }
}
const mapStateToProps = (state:AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)
(App)


const MainApp: React.FC =  () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;