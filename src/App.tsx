import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {RootStateType} from './redux/rootStateType';

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData}/>}/>
                    <Route /*exact*/ path="/dialogs" render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                                                            messagesData={props.state.messagesPage.messagesData}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
