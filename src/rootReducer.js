import { combineReducers } from 'redux';
import workspaceReducer from './components/Workspace/workspaceReducer';
import headerReducer from './components/Header/headerReducer';

const rootReducer = combineReducers({
  workspaceReducer, headerReducer
});

export default rootReducer;