export const requestCount = () => {
  return {
    type: 'REQUEST_COUNT'
  }
}

export const recieveCount = json => {
  return {
    type: 'RECIEVE_COUNT',
    count: json.count
  }
}

export function initCount() {
  return function (dispatch) {
    dispatch(requestCount())
    return fetch('/api/counter/count')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(recieveCount(json))
      })
  }
}

export function getIncrement() {
  return function (dispatch) {
    dispatch(requestCount())
    return fetch('/api/counter/increment')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(recieveCount(json))
      })
  }
}

export function getDecrement() {
  return function (dispatch) {
    dispatch(requestCount())
    return fetch('/api/counter/decrement')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(recieveCount(json))
      })
  }
}
