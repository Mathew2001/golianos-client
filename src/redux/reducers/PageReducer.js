import { 
  GET_ALL_PAGES_BY_BUSINESS_ID_SUCCESS,
  GET_ALL_PAGES_BY_BUSINESS_ID_FAIL,
  GET_ALL_PAGES_BY_BUSINESS_ID_LOADING,
} from "../actions/PageActions";

const initialState = {
  pagesByBusinessId: [],
  loading: false,
  error: null,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PAGES_BY_BUSINESS_ID_LOADING:
      return { ...state, loading: true, error: null };
    case GET_ALL_PAGES_BY_BUSINESS_ID_SUCCESS:
      return { ...state, pagesByBusinessId: action.payload, loading: false, error: null };
    case GET_ALL_PAGES_BY_BUSINESS_ID_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default pageReducer;