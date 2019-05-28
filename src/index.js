import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Campaign from './Campaign';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Common/Navigations';
import ManageCampaign from './components/ManageCampaign/ManageCampaign';


const store = createStore(rootReducer);

const Routes = () => (
    <Router>
        <React.Fragment>
            <Navigation />
            <div>
                <Route path="/abc"  component={ManageCampaign} />
                {/* <Route path="/compaign" component={ManageCampaign} /> */}
                <Route path="/" exact component={App} />
            </div>
        </React.Fragment>
    </Router>
)

ReactDOM.render(
<Provider store={store}>
    <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
