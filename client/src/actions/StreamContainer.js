import {
  PAGES_FETCH_DATA_SUCCESS,
  NO_PAGES_AVAILABLE,
  PAGES_HAS_ERRORED,
  PAGES_HAS_ERROR_MESSAGE
} from "../reducers/stream-reducer";

function pagesHasErrored(bool) {
  return {
    type: PAGES_HAS_ERRORED,
    payload: { hasError: bool }
  };
}

function pagesHasErrorMessage(errorMessage) {
  return {
    type: PAGES_HAS_ERROR_MESSAGE,
    payload: { errorMessage: errorMessage }
  };
}

function noPagesAvailable(bool) {
  return {
    type: NO_PAGES_AVAILABLE,
    payload: { noPagesAvailable: bool }
  };
}

function pageDetails(pages) {
  return {
    type: PAGES_FETCH_DATA_SUCCESS,
    payload: { pages }
  };
}

function fetchTotalPages(type) {
  const tripsPath = `/api/${type}`;
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

export function fetchPages(type) {
  return dispatch => {
    fetchTotalPages(type)
      .then(pages => {
        let notAvailable = pages.length === 0;
        dispatch(noPagesAvailable(notAvailable));
        dispatch(pageDetails(pages));
      })
      .catch(errorMessage => {
        dispatch(pagesHasErrored(true));
        dispatch(pagesHasErrorMessage(errorMessage));
      });
  };
}
