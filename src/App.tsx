import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {ActionsTypes, RootStateType, StoreType} from './redux/rootStateType';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

function App(props: AppPropsType) {

    return (

        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile postData={props.state.profilePage.postData}
                                              messageForNewPost={props.state.profilePage.messageForNewPost}
                                              dispatch={props.dispatch}
                       />}/>
                <Route path="/dialogs"
                       render={() => <Dialogs
                                              store={props.store}
                       />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
