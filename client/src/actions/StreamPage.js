import {
  STREAMS_FETCH_DATA_SUCCESS,
  NO_STREAMS_AVAILABLE,
  PAGE_DETAILS_HAS_ERRORED,
  PAGE_DETAILS_HAS_ERROR_MESSAGE
} from "../reducers/page-reducer";

function pagesHasErrored(hasError) {
  return {
    type: PAGE_DETAILS_HAS_ERRORED,
    payload: { hasError }
  };
}

function pagesHasErrorMessage(errorMessage) {
  return {
    type: PAGE_DETAILS_HAS_ERROR_MESSAGE,
    payload: { errorMessage }
  };
}

function noPagesAvailable(noStreamsAvailable) {
  return {
    type: NO_STREAMS_AVAILABLE,
    payload: { noStreamsAvailable }
  };
}

function streamDetails(streams) {
  return {
    type: STREAMS_FETCH_DATA_SUCCESS,
    payload: { streams }
  };
}

function fetchStreamsForPage(page) {
  const tripsPath = `/api/${page}`;
  const errorMessage = "Failed to fetch stream pages.";

  return fetch(tripsPath, {
    method: "get",
    credentials: "include"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(errorMessage);
  });
}

export function fetchPageDetails(page) {
  return dispatch => {
    fetchStreamsForPage(page)
      .then(streams => {
        let notAvailable = streams.length === 0;
        dispatch(noPagesAvailable(notAvailable));
        dispatch(streamDetails(streams));
      })
      .catch(errorMessage => {
        dispatch(pagesHasErrored(true));
        dispatch(pagesHasErrorMessage(errorMessage));
      });
  };
}
