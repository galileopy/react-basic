import * as Actions from '../actions';

const LogReducer = (state = '', action) => {
  switch (action.type) {
    case Actions.Log.type:
      return action.payload;
    default:
      return state;
  }
};

export default LogReducer;
