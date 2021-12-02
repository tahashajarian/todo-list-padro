export const APP_TITLE = "Task Management";
export const TASKS_TITLE = "Tasks";
export const NO_TASK_TEXT = "You have nothing to do. \n Go get some sleep.";
export const NEW_TASK_TITLE = "Add a new Task";
export const EDIT_TASK_TITLE = "Edit Task";

export const appContextActions = {
  ADD_NEW_TASK: "ADD_NEW_TASK",
  UPDATE_APP_STATUS: "UPDATE_APP_STATUS",
  UPDATE_TASK_STATUS: "UPDATE_TASK_STATUS",
  GET_TASK_LOCALSTORAGE: "GET_TASK_LOCALSTORAGE"
};

export const cardStatuses = {
  ToDo: "ToDo",
  InProgress: "InProgress",
  InQA: "InQA",
  Done: "Done",
  Blocked: "Blocked",
  Deployed: "Deployed"
}

export const appStates = {
  Home: 'Home',
  Edit: 'Edit'
}