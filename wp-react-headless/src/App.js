import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import TopNavBar from './components/TopNavBar';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import { Homepage } from './pages/Homepage';
import { PostView } from './pages/post-pages/PostView';
import { PostList } from './pages/post-pages/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBar />
      </header>
      <Router>
        <Fragment>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/post-list" component={PostList} />
          <Route exact path="/post-list/:slug" component={PostView} />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
