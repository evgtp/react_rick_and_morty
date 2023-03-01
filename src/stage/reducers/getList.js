const initialState = {
  list: '',
}

export default function getList(state = initialState, action) {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, list: action.payload }

    default:
      return state
  }
}
