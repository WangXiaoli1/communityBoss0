import React, { Component } from 'react';
import './App.css';
import './css/reset.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Community from './js/Community';

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <Route exact path='/' render={() => (
                    <div className="app">
                        <div>我是BOSS</div>
                        <p>姓名：</p>
                        <input type="text" placeholder="请输入姓名"/>
                        <p>密码:</p>
                        <input type="text" placeholder="请输入密码"/>
                        <Link to="/js/Community"><span className="login">登&nbsp;录</span></Link>
                    </div>
                )} />
                <Route path="/js/Community" component={Community}/>
            </div>
                </Router>
        );
    }

}

export default App;