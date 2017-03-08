import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'


// import the root reducer
import rootReducer from './reducers/indx';

import comments from './data/comments';
import posts from './data/posts';


// create an object for the default data

const defaultState = {
  post: posts,
  comments: comments
}


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store)

export default store;