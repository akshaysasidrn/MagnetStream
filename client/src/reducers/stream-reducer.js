// actions
export const PAGES_FETCH_DATA_SUCCESS = "PAGES_FETCH_DATA_SUCCESS";
export const NO_PAGES_AVAILABLE = "NO_PAGES_AVAILABLE";
export const PAGES_HAS_ERRORED = "PAGES_HAS_ERRORED";
export const PAGES_HAS_ERROR_MESSAGE = "PAGES_HAS_ERROR_MESSAGE";

const initialState = {
  pages: [],
  currentPage: 0,
  errorMessage: "",
  hasError: false,
  noPagesAvailable: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PAGES_HAS_ERRORED:
      return Object.assign({}, state, action.payload);
    case PAGES_HAS_ERROR_MESSAGE:
      return Object.assign({}, state, action.payload);
    case NO_PAGES_AVAILABLE:
      return Object.assign({}, state, action.payload);
    case PAGES_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
