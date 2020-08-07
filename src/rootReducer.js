import { combineReducers } from 'redux';
import workspaceReducer from './components/Workspace/workspaceReducer';
import headerReducer from './components/Header/headerReducer';
import sideMenuReducer from './components/SideMenu/sideMenuReducer';

const rootReducer = combineReducers({
  workspaceReducer, headerReducer, sideMenuReducer
});

export default rootReducer;