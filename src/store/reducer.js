import { GETTING_HOLIDAY_DATA } from './actionCreater';

const initialState = {
  holidays: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_HOLIDAY_DATA:
      return {
        ...state,
        holidays: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
