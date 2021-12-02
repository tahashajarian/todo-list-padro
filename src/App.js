import React from "react";
import AllTasks from "./components/all-tasks";
import Header from "./components/header";
import NewTaskContainer from "./components/new-task-container";
import {
  appStates,
  APP_TITLE,
  NO_TASK_TEXT,
  TASKS_TITLE
} from "./constance/consts";
import { useContextStates } from "./context/state";

function App() {
  const appStatesContext = useContextStates();
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header title={APP_TITLE} status={appStatesContext.appStatus} />
      <NewTaskContainer />
      {appStatesContext.appStatus === appStates.Home && (
        <AllTasks
          tasks={appStatesContext ? appStatesContext.allTask : []}
          title={TASKS_TITLE}
          noTaskText={NO_TASK_TEXT}
        />
      )}
    </div>
  );
}

export default App;
