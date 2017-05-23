import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_POST:
      const post = action.payload.data;
      // ES5
      // const newState = { ...state  };
      // newState[post.id] = post;
      // return newState;

      // ES 6
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // console.log(action.payload.data);
      return _.mapKeys(action.payload.data,'id');
    case DELETE_POST:
      return _.omit(state,action.payload);
    default:
      return state;
  }
}
