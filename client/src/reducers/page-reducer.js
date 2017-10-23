// actions
export const STREAMS_FETCH_DATA_SUCCESS = "STREAMS_FETCH_DATA_SUCCESS";
export const NO_STREAMS_AVAILABLE = "NO_STREAMS_AVAILABLE";
export const PAGE_DETAILS_HAS_ERRORED = "PAGE_DETAILS_HAS_ERRORED";
export const PAGE_DETAILS_HAS_ERROR_MESSAGE = "PAGE_DETAILS_HAS_ERROR_MESSAGE";

const initialState = {
  streams: [],
  currentPage: 0,
  errorMessage: "",
  hasError: false,
  noPagesAvailable: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PAGE_DETAILS_HAS_ERRORED:
      return Object.assign({}, state, action.payload);
    case PAGE_DETAILS_HAS_ERROR_MESSAGE:
      return Object.assign({}, state, action.payload);
    case NO_STREAMS_AVAILABLE:
      return Object.assign({}, state, action.payload);
    case STREAMS_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
