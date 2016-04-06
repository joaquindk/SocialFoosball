let reducer = function(state, action) {
  switch (action.type) {
    case 'RECEIVED_PLAYERS':
      return Object.assign({}, state, {
        players: action.data
      })
    case 'RECEIVED_MATCHES':
        return Object.assign({}, state, {
          matches: action.data
        })
    default:
      return state;
  }
}

export default reducer
