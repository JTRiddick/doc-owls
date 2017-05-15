import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // dont mutate state by pushing it, make sure you're returning new data
      // return state.concat([action.payload.data]);
      //es6 magic with spread operator
      return [action.payload.data, ...state];
  }

  return state;
}
