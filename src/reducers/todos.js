import { todosTypes } from "actions/todos";
import { utilsTypes } from "actions/todos";

const initialState = {
  todos : [],
  alert: {
    show: false,
    title: '',
    kind: '',
    timeout: 3000,
    message: ''
  },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case todosTypes.INDEX_IN_REQUEST:
        return {
          ...state
        };
      case todosTypes.INDEX_IN_SUCCESS:
        return {
          ...state,
          todos: action.result
        };
      case todosTypes.INDEX_IN_FAILURE:
        return {
          ...state
        };
      case todosTypes.PATCH_IN_REQUEST:
        return {
          ...state
        };
      case todosTypes.PATCH_IN_SUCCESS:
        return {
          ...state,
          todos: state.todos.map((todo, id) => id === action.result.id ? action.result : todo )
        };
      case todosTypes.PATCH_IN_FAILURE:
        return {
          ...state
        };
      case todosTypes.POST_IN_REQUEST:
        return {
            ...state
        };
      case todosTypes.POST_IN_SUCCESS:
        return {
            ...state,
            todos: [...state.todos, action.result]
        };
      case todosTypes.POST_IN_FAILURE:
        return {
            ...state
        };
      case utilsTypes.SET_ALERT:
        return {
            ...state,
            alert: {
            show: true,
            kind: action.kind,
            timeout: action.timeout || initialState.alert.timeout,
            message: action.message,
            title: action.title
            }
        };
      case utilsTypes.CLOSE_ALERT:
        return {
            ...state,
            alert: initialState.alert
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  