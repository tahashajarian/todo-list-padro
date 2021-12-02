import { createContext, useContext, useReducer } from "react";
import {
  appContextActions, appStates
} from "../constance/consts";

const localStorageTasks = localStorage.getItem('tasks');
const initialState = {
  allTask: localStorageTasks && JSON.parse(localStorageTasks) ? JSON.parse(localStorageTasks) : [],
  appStatus: appStates.Home,
  editCardId: null
};

const AllTaskContext = createContext(initialState);
const UpdateAllTaxtContext = createContext();

const reducer = (
  state,
  action
) => {
  switch (action.type) {
    case appContextActions.ADD_NEW_TASK:
      localStorage.setItem('tasks', JSON.stringify([...state.allTask, action.payload]))
      return { ...state, allTask: [...state.allTask, action.payload] };
    case appContextActions.UPDATE_TASK_STATUS:
      const cardId = state.editCardId;
      const newAllTask = [...state.allTask];
      newAllTask[cardId] = action.payload;
      localStorage.setItem('tasks', JSON.stringify(newAllTask))
      return { ...state, allTask: [...newAllTask] };
    case appContextActions.GET_TASK_LOCALSTORAGE:
      return { ...state, allTask: [...state.allTask, ...action.payload] }
    case appContextActions.UPDATE_APP_STATUS:
      return { ...state, appStatus: action.payload.status, editCardId: action.payload.editCardId };
    default:
      return state
  }
};

export const AppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <AllTaskContext.Provider value={state}>
      <UpdateAllTaxtContext.Provider value={dispatch}>
        {children}
      </UpdateAllTaxtContext.Provider>
    </AllTaskContext.Provider>
  );
};

export function useContextStates() {
  return useContext(AllTaskContext);
}

export function useContextUpdateStates() {
  return useContext(UpdateAllTaxtContext);
}
